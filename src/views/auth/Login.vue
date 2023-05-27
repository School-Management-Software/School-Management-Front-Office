<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-cyan-50 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h1 class="text-blueGray-500 text-xl font-bold">
                Sign in
              </h1>

            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <div v-if="error" class="text-center mt-3">
              <FromError :error="error"/>
            </div>

          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Email
                </label>
                <input type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email" v-model="email" />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password" v-model="password" />
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-sky-950 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button" @click="submitForm">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import FromError from "@/components/Errors/FormErrors.vue";

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: null,
    }
  },
  components: {
    FromError,
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(process.env.VUE_APP_API_BASE+'login', {
          email: this.email,
          password: this.password
        })
        this.$store.commit('setToken', response.data)
        this.$router.push('/')
      } catch (error) {
        // show error
        this.error = error.response.data.message

        // notification (Toast)
        this.$moshaToast({
            title: 'Error',
            description: error.response.data.message
          },
          {
            timeout: 3000,
            showIcon: 'true',
            type: 'danger', // 'info', 'danger', 'warning', 'success', 'default'
            transition: 'bounce',
        })
      }
    }
  }
};
</script>
