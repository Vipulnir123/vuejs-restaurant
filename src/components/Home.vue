<template>
    <Header />
    <div>
        <h1>Hello {{ name }}, Welcome to Home Page</h1>
        <table border="1" class="tb">
  <thead>
    <tr>
      <th>Name</th>
      <!-- <th>ID</th> -->
      <th>Contact</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.name }}</td>
      <!-- <td>{{ item.id }}</td> -->
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id"><button>Update</button></router-link>
        <button @click="deleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>

    </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
import { API_BASE } from "../config";


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    components: {
        Header,
    },
    async mounted() {
        this.loadData();
    },
    methods: {
        async deleteRestaurant(id) {
            // console.warn(id)
            let result = await axios.delete("http://localhost:3000/restaurants/" + id);

            // console.warn(result)
            if (result.status == 200) {
                this.loadData();

            }

        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push("/sign-up");
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            console.warn(result)
            this.restaurant = result.data;
        },
    },
};
</script>
<style>
tr {
    width: 160px;
    text-align: center;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    background-color: skyblue;
    color: white;

}
.home-page {
  background: url("@/assets/logo.png");
  opacity: 0.2; /* makes whole div faded */
}

</style>
