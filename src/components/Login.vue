<template>
  <img class="logo" src="../assets/logo.png" />
  <div>
    <h1>Login</h1>
  </div>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>

    <p>
      <router-link to="/sign-up">Don't have an account? Sign up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

import { API_BASE } from "../config";


export default {
  // eslint-disable-next-line 
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        let result = await axios.get("http://localhost:3000/users", {
          params: { email: this.email, password: this.password },
        });

        if (result.data.length > 0) {
          // ✅ Save user in localStorage (same key as SignUp.vue)
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));

          // ✅ Redirect to Home
          this.$router.push("/home");
        } else {
          alert("Invalid email or password");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong, please try again later.");
      }
    },
  },
};
</script>

