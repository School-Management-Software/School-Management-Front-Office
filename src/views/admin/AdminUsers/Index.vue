<template>
    <div class="flex flex-wrap -mt-24">
      <div class="w-full mb-12 px-4">
        <card-table 
          :title="title"
          :columns="columns"
          :data="data"
          :storeURL="storeURL"
          :isAnError="this.isAnError"
          :isLoading="isLoading"
          :actions="actions"/>
      </div>
      <!-- <div class="w-full mb-12 px-4">
        <card-table color="dark" />
      </div> -->
    </div>
  </template>
  <script>
  import CardTable from "@/components/Cards/CardTable.vue";
  import { mapGetters } from 'vuex';
  // import { isProxy, toRaw } from 'vue';
  
  export default {
    name: 'ListAdminUsersView',
    data() {
      return {
        title: "Admin Users",
        storeURL: "/admin/adminUsers/store",
        isLoading: true,
        data: [],
        columns: [],
        actions: [
          { label: 'Delete', handler: this.handleDelete },
          { label: 'Update', handler: null, url: "/admin/adminUsers/edit" },
        ]
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
          await this.$store.dispatch('fetchData', 'adminUsers/list')
          
            if(this.isAnError == false){
              let newData = this.dataArray.map((item) => ({ 
                id: item.id,
                email: `<span class="font-bold">${item.email}</span>` ,
                is_active: item.is_active == 1 ? `<i class="fas fa-circle text-green-500 mr-2"></i> Active` : `<i class="fas fa-circle text-orange-500 mr-2"></i> Inactive`,
                is_admin: item.is_admin ,
                cin: item.profile ? item.profile.cin : "" ,
                birthday: item.profile ? item.profile.birthday : "" ,
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
        },

        handleDelete(id) {
          console.log("argument argument","id", id);
          // if (isProxy(argument)){
              // argument = toRaw(argument)
              // console.log("delete 1 event", argument.id);

              this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  const payload = {
                    URL: 'adminUsers/delete/',
                    ID: id,
                  };
                  this.$store.dispatch('deleteData', payload)
                  this.$swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  window.location.reload();
                }
              })
            // }
        },
    }
  };
  </script>
  