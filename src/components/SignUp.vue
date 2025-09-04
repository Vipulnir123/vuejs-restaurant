<template>
  <img class="logo" src="../assets/logo.png" />
  <div>
    <h1>Sign Up</h1>
  </div>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signUp">Sign Up</button>

    <p>
      <router-link to="/login">Already have an account? Login here.</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      try {
        let result = await axios.post("https://restaurant-api-gpuc.onrender.com/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push("/Home");
        }
      } catch (err) {
        console.error(err);
        alert("Signup failed");
      }
    },
  },
};
</script>
