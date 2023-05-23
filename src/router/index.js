import { createRouter, createWebHistory } from 'vue-router'
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import LoginView from "@/views/auth/Login.vue";

import RolesView from "@/views/admin/Roles/Index.vue";

import ListAdminUsersView from "@/views/admin/AdminUsers/Index.vue";
import EditAdminUsersView from "@/views/admin/AdminUsers/Edit.vue";
import StoreAdminUsersView from "@/views/admin/AdminUsers/Store.vue";

import ProfileView from "@/views/admin/Profile/Index.vue";

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
            path: "/admin/roles",
            redirect: "/admin/roles/list",
            children: [
              {
                path: "/admin/roles/list",
                component: RolesView,
                beforeEnter: (to, from, next) => {
                    if (store.state.token) {
                      next();
                    } else {
                      next("/auth/login");
                    }
                  },
              },
            ]
          },
          {
            path: "/admin/adminUsers",
            redirect: "/admin/adminUsers/list",
            children: [
              {
                path: "/admin/adminUsers/list",
                component: ListAdminUsersView,
                beforeEnter: (to, from, next) => {
                    if (store.state.token) {
                      next();
                    } else {
                      next("/auth/login");
                    }
                  },
              },
              {
                path: "/admin/adminUsers/edit",
                component: EditAdminUsersView,
                beforeEnter: (to, from, next) => {
                    if (store.state.token) {
                      next();
                    } else {
                      next("/auth/login");
                    }
                  },
              },
              {
                path: "/admin/adminUsers/store",
                component: StoreAdminUsersView,
                beforeEnter: (to, from, next) => {
                    if (store.state.token) {
                      next();
                    } else {
                      next("/auth/login");
                    }
                  },
              },
            ]
          },

          {
            path: "/admin/profile",
            component: ProfileView,
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