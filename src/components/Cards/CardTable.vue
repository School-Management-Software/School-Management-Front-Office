<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-8 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg" :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']">
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="h-40 bg-gray-100 inline-flex items-center justify-center">
      <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-gray-500 transition ease-in-out duration-150 ">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </div>
    </div>
    <div v-else-if="isAnError" class="h-40 bg-gray-100 inline-flex items-center justify-center">
      <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-gray-500 transition ease-in-out duration-150 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" fill="currentColor" class="-ml-1 mr-3 h-7 w-7 text-orange-500" viewBox="0 0 16 16">
          <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>
        There is an unexpected error !!!
      </div>
    </div>
    <div v-else class="block w-full overflow-x-auto px-8 ">
      <DataTable>
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.field"
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
              {{ column.label }}
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td v-for="column in columns" :key="column.field"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span v-html="item[column.field]"></span>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <table-dropdown :id="item.id"/>
            </td>
          </tr>
        </tbody>
      </DataTable>
    </div>
  </div>
</template>
<script>
  import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";

  import bootstrap from "@/assets/logo.png";

  import DataTable from 'datatables.net-vue3'
  import DataTablesLib from 'datatables.net';

  DataTable.use(DataTablesLib);

  export default {
    data() {
      return {
        bootstrap,
      };
    },
    components: {
      TableDropdown,
      DataTable,
    },
    props: {
      title: String,
      columns: Array,
      data: Array,
      isLoading: Boolean,
      isAnError: Boolean,
      color: {
        default: "light",
        validator: function (value) {
          // The value must match one of these strings
          return ["light", "dark"].indexOf(value) !== -1;
        },
      },
    },
  };
</script>

<style>
  @import 'datatables.net-dt';
</style>