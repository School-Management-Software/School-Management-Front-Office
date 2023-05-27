<template>
  <span class="text-xs whitespace-nowrap pr-4 text-red-500">
    {{ error }}
  </span>
</template>
<script>


  export default {
    data() {
      return {
        
      };
    },
    props: {
      error: String,
    },
  };
</script>