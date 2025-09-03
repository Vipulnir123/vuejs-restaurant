<template>
  <Header />
  <div>
    <h1>Hello User, Welcome to Add Restaurant Page</h1>
  </div>
  <form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter address" v-model="restaurant.address"/>
    <input type="text" placeholder="Enter contact" v-model="restaurant.contact"/>
    <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Add",
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
    async addRestaurant()
    {
      console.warn(this.restaurant)
      const result= await axios.post("http://localhost:3000/restaurants",{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact
      });
      if(result.status===201)
      {
        this.$router.push({name:'Home'});//name is case sensitive
      }
        
      console.warn("result",result)
    }


  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push("/sign-up");
    }
  },
};
</script>
<style>
 .add button {
  width: 300px;
  height: 40px;
  background-color: skyblue;
  color: white;
  border: 1px solid skyblue;
  cursor: pointer;
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>