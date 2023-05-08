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
  components: {
    CardTable,
  },
  mounted() {
    this.getCountries()
  },
  methods: {
    async getCountries() {
      try {
        console.log(this.$store.state.token);
        axios.get('http://127.0.0.1:8000/api/countries', {},
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$store.state.token,
            },
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });

      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
