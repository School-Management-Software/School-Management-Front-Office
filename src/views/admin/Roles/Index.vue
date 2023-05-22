<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table 
          :title="title"
          :columns="columns"
          :data="data"
          :isAnError="this.isAnError"
          :isLoading="isLoading"/>
    </div>
    <!-- <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div> -->
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";
import { mapGetters } from 'vuex';


export default {
  name: 'RolesView',
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
  computed: {
    ...mapGetters(['getData', 'isAnError']),
    dataArray() {
      return [...this.getData];
    },
  },
  mounted() {
    this.getRoles()
  },
  methods: {

    async getRoles(){
      await this.$store.dispatch('fetchData', process.env.VUE_APP_API_BASE+'roles/getAll')
      
        if(this.isAnError == false){
          let newData = this.dataArray.map((item) => ({ 
              id: item.id,
              name: item.name,
              created_at: new Date(item.created_at).toLocaleString().replace('T', ' '),
            })
          );

          this.data = Object.values(newData);
          
          this.columns = [
            {label : "id", field : "id"},
            {label : "name", field : "name"},
            {label : "created_at", field : "created_at"},
            {label : "action", field : "action"},
          ]

          this.isLoading = false;

          return
        }

        this.isLoading = false;
    }
  }
};
</script>
