<template>
  <div>
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          :style="`background-image: url('${loginbg}');`"
        ></div>
        <router-view />
      </section>
    </main>
  </div>
</template>
<script>

import loginbg from "@/assets/img/bg-login.jpg";

export default {
  name:'auth-layout',
  data() {
    return {
      loginbg,
    };
  },
  components: {
  },
};
</script>
