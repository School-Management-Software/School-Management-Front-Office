import { createRouter, createWebHistory } from 'vue-router'
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import LoginView from "@/views/auth/Login.vue";
import CountriesView from "@/views/admin/Countries/Index.vue";
import AdminUsersView from "@/views/admin/AdminUsers/Index.vue";

import store from '@/vuex/store';

const routes = [
    {
        path: "/",
        redirect: "/admin/dashboard",
        component: Admin,
        children: [
          {
              path: "/admin/dashboard",
              component: Dashboard,
              beforeEnter: (to, from, next) => {
                  if (store.state.token) {
                    next();
                  } else {
                    next("/auth/login");
                  }
                },
          },
          {
            path: "/admin/countries",
            component: CountriesView,
            beforeEnter: (to, from, next) => {
                if (store.state.token) {
                  // if token exists, allow access to the route
                  next();
                } else {
                  // if token does not exist, redirect to login page
                  next("/auth/login");
                }
              },
          },
          {
            path: "/admin/adminUsers/list",
            component: AdminUsersView,
            beforeEnter: (to, from, next) => {
                if (store.state.token) {
                  // if token exists, allow access to the route
                  next();
                } else {
                  // if token does not exist, redirect to login page
                  next("/auth/login");
                }
              },
          },
        ],
    },
    {
        path: "/login",
        redirect: "/auth/login",
        component: Auth,
        children: [
          {
            path: "/auth/login",
            component: LoginView,
          },
        ],
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    store,
})

export default router