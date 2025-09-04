<template>
  <Header />
  <div>
    <h1>Hello User, Welcome to Update Restaurant Page</h1>
  </div>
    <form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter address" v-model="restaurant.address"/>
    <input type="text" placeholder="Enter contact" v-model="restaurant.contact"/>
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
import { API_BASE } from "../config";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Update",
  components: {
    Header,
  },
    data() {
    return {
      restaurant:{
        name:"",
        address:"",
        contact:""
      }
    };
  },
  methods:{
    async updateRestaurant()
    {
      console.warn(this.restaurant)
            const result = await axios.put(`${API_BASE}/restaurants/${this.$route.params.id}`, {
  name: this.restaurant.name,
  address: this.restaurant.address,
  contact: this.restaurant.contact,
});
      if(result.status===200)
      {
        this.$router.push({name:'Home'});//name is case sensitive
      }
        

    }
  },
 async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push("/sign-up");
    }

    //const res=await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
    
    // this.restaurant=res.data;
   const res = await axios.get(`${API_BASE}/restaurants/${this.$route.params.id}`);
   console.warn(this.$route.params.id)
this.restaurant = res.data;
  },
};
</script>
