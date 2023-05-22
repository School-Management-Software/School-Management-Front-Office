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
    name: 'CountriesView',
    data() {
      return {
        title: "Admin Users",
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
      this.getAdminUsers()
    },
    methods: {
        async getAdminUsers(){
          await this.$store.dispatch('fetchData', process.env.VUE_APP_API_BASE+'adminUsers/list')
          
            if(this.isAnError == false){
              let newData = this.dataArray.map((item) => ({ 
                id: item.id,
                email: `<span class="font-bold">${item.email}</span>` ,
                is_active: item.is_active == 1 ? `<i class="fas fa-circle text-green-500 mr-2"></i> Active` : `<i class="fas fa-circle text-orange-500 mr-2"></i> Inactive`,
                is_admin: item.is_admin ,
                cin: item.profile.cin ,
                birthday: item.profile.birthday ,
                roles: item.roles.map((role) => `<span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20 mr-1">${role.name}</span>`),
                })
              );

              this.data = Object.values(newData);
              
              this.columns = [
                {label : "id", field : "id"},
                {label : "email", field : "email"},
                {label : "cin", field : "cin"},
                {label : "birthday", field : "birthday"},
                {label : "roles", field : "roles"},
                {label : "Status", field : "is_active"},
                {label : "is_admin", field : "is_admin"},
              ]

              this.isLoading = false;

              return
            }

            this.isLoading = false;
        }
    }
  };
  </script>
  