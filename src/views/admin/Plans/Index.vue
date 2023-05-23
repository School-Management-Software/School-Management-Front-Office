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
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";
import { mapGetters } from 'vuex';


export default {
  name: 'ListPlansView',
  data() {
    return {
      title: "List Of Plans",
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
    this.getPlans()
  },
  methods: {

    async getPlans(){
      await this.$store.dispatch('fetchData', 'plans/list')
      
        if(this.isAnError == false){
          let newData = this.dataArray.map((item) => ({ 
              id: item.id,
              name_en: item.name_en,
              description_en: item.description_en,
              price: item.price,
              unit: item.unit,
              per: item.per,
              created_at: new Date(item.created_at).toLocaleString().replace('T', ' '),
            })
          );

          this.data = Object.values(newData);
          
          this.columns = [
            {label : "id", field : "id"},
            {label : "name", field : "name_en"},
            {label : "description", field : "description_en"},
            {label : "price", field : "price"},
            {label : "unit", field : "unit"},
            {label : "per", field : "per"},
            {label : "created at", field : "created_at"},
          ]

          this.isLoading = false;

          return
        }

        this.isLoading = false;
    },
    handleDelete(id) {
          console.log("argument argument","id", id);
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
                    URL: 'plans/deleteOne/',
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
        },
  }
};
</script>
