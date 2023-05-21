<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
    <!-- <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div> -->
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";
import axios from 'axios'

export default {
  name: 'CountriesView',
  data() {
    return {
      title: "List Of Roles",
      isLoading: true,
      data: [],
      columns: [],
    };
  },
  components: {
    CardTable,
  },
  mounted() {
    this.getRoles()
  },
  methods: {
    async getRoles() {
      try {
        console.log(this.$store.state.token);
          axios.get(process.env.VUE_APP_API_BASE+'roles/getAll', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.state.token,
                },
            })
          .then(response => {
            this.data = response.data.data.map((item) => ({ 
                id: item.id,
                name: item.name,
                created_at: item.created_at,
              })
            );
            
            this.columns = [
              {label : "id", field : "id"},
              {label : "name", field : "name"},
              {label : "created_at", field : "created_at"},
              {label : "action", field : "action"},
            ]
            
            this.isLoading = false;
          })
          .catch(function (error) {
            console.error(error);
            this.isLoading = false;
          });

      } catch (error) {
        console.error(error);
        this.isLoading = false;
      }
    }
  }
};
</script>
