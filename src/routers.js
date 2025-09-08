import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import Food from "./components/Food.vue";


const routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/sign-up", name: "SignUp", component: SignUp },
  { path: "/login", name: "Login", component: Login },
  { path: "/", redirect: "/sign-up" },   // this fixes the blank page
  { path: "/add", name: "Add", component: Add },
  { path: "/update/:id", name: "Update", component: Update },
  { path: "/food/:id", name: "Food", component: Food }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user-info");

  if (!user && to.path === "/home") {
    next("/login");
  } else if (user && (to.path === "/login" || to.path === "/sign-up")) {
    next("/home");
  } else {
    next();
  }
});

export default router;
