<template>
  <div class="flex flex-wrap -mt-24">
    <div class="w-full lg:w-12/12 px-4">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-blueGray-700 text-xl font-bold">Update User</h6><button
              class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"> Update User Admin </button>
          </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
          <form>
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> User Information </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> Username
                  </label><input type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> Email address
                  </label><input type="email"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> First Name
                  </label><input type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> Last Name
                  </label><input type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300">
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> Contact Information </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> Address
                  </label><input type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> City
                  </label><input type="email"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> Country
                  </label><input type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> Postal Code
                  </label><input type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300">
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> About Me </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3"><label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password"> About me
                  </label><textarea type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"> A beautiful UI Kit and Admin for VueJS &amp; Tailwind CSS. It is Free and Open Source. </textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex';

  export default {
    name: 'EditAdminUsersView',
    data() {
      return {
        title: "Admin Users",
        isLoading: true,
        data: [],
      };
    },
    components: {
      
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
      async getAdminUsers() {
        // await this.$store.dispatch('fetchData', 'admin/adminUsers/list')

        if (this.isAnError == false) {

          this.isLoading = false;

          return
        }

        this.isLoading = false;
      },
    }
  };
</script>