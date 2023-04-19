<template>
  <div>
    <Sidebar-component />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import SidebarComponent from "@/components/Sidebar/SidebarComponent.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    SidebarComponent,
    HeaderStats,
    FooterAdmin,
  },
};
</script>
