<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-table 
          :title="title"
          :columns="columns"
          :data="data"
          :isLoading="isLoading"/>
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
        title: "Admin Users",
        isLoading: true,
        data: [],
        columns: [],
      };
    },
    components: {
      CardTable,
    },
    mounted() {
      this.getAdminUsers()
    },
    methods: {
        async getAdminUsers() {
            try {
                console.log(this.$store.state.token);
                axios.get(process.env.VUE_APP_API_BASE+'adminUsers/list', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.$store.state.token,
                    },
                })
                .then(response => {
                    // this.data = response.data.data;
                    // this.columns = Object.keys(response.data.data[0]).map(key => ({ label: key.toUpperCase(), field: key }));

                    this.data = response.data.data.map((item) => ({ 
                        id: item.id,
                        email: `<span class="font-bold">${item.email}</span>` ,
                        is_active: item.is_active == 1 ? `<span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>` : `<span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Inactive</span>`,
                        is_admin: item.is_admin ,
                        cin: item.profile.cin ,
                        birthday: item.profile.birthday ,
                        roles: item.roles.map((role) => `<span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-1">${role.name}</span>`),
                        // created_at: item.created_at ,
                      })
                    );
                    
                    this.columns = [
                      {label : "id", field : "id"},
                      {label : "email", field : "email"},
                      {label : "cin", field : "cin"},
                      {label : "birthday", field : "birthday"},
                      {label : "roles", field : "roles"},
                      {label : "Status", field : "is_active"},
                      {label : "is_admin", field : "is_admin"},
                      // {label : "created_at", field : "created_at"},
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
  