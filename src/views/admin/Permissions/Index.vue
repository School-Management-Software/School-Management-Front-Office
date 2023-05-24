<template>
  <div class="flex flex-wrap -mt-24">
    <div class="w-full mb-12 px-4">
      <card-table 
          :title="title"
          :columns="columns"
          :data="data"
          :actions="actions"
          :storeURL="storeURL"
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
  name: 'ListPermissionsView',
  data() {
    return {
      title: "List Of Permissions",
      storeURL: "/admin/adminUsers/store",
      isLoading: true,
      data: [],
      columns: [],
      actions: [
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
    this.getRoles()
  },
  methods: {

    async getRoles(){
      await this.$store.dispatch('fetchData', 'admin/permissions/getAll')
      
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
          ]

          this.isLoading = false;

          return
        }

        this.isLoading = false;
    }
  }
};
</script>
