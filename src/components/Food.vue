<template>
  <div>


    <h1 style="position: absolute;">Food List</h1>
    <table border="1" class="tb" style="
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 3px solid black;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    background-color: #f9f9f9;
    
">
      <thead>
        <tr>
          <th> Name </th>
          <th> Price </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in foods" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>

    
    <h3>Add Food Item for Restaurant: {{ $route.params.id }}</h3>

    <form class="food" style="position: absolute;">
      <input type="text" placeholder="Enter Food Name" v-model="food.name" style="
    width: 150px;
    height: 40px;
    border: 3px solid black;
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    padding: auto;
" />
      <input type="text" placeholder="Enter Price" v-model="food.price" style="
      width: 150px;
    height: 40px;
    border: 3px solid black;
    display: block;
    /* margin-left: auto; */
    margin-right: auto;" />
      <button type="button" style="
      margin-top: 10px;
    width: 150px;
    height: 40px;
    /* background-color: skyblue; */
    /* color: white; */
    border: 3px solid black;
    /* cursor: pointer; */
    /* align-items: center; */
    
    margin-left: auto;
    margin-right: auto;
    padding: auto;
    margin-bottom: 10px;
" @click="addFood">Add Food</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE } from "../config";

export default {

  // eslint-disable-next-line vue/multi-word-component-names  
  name: "Food",

  data() {
    return {
      food: { name: "", price: "" },
      foods: []   // ✅ store all foods for this restaurant
    };
  },
  methods: {
    async addFood() {
      try {
        const result = await axios.post(`${API_BASE}/foods`, {
          restaurantId: this.$route.params.id,
          name: this.food.name,
          price: this.food.price,
        });

        if (result.status === 201) {
          alert("Food added successfully!");
          this.loadFoods();  // refresh list
          this.food = { name: "", price: "" }; // clear form
        }
      } catch (error) {
        console.error(error);
        alert("Error adding food!");
      }
    },
    async loadFoods() {
      const result = await axios.get(
        `${API_BASE}/foods?restaurantId=${this.$route.params.id}`
      );
      this.foods = result.data;
    }
  },
  mounted() {
    this.loadFoods();
  }
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

.-page {
  background: url("@/assets/logo.png");
  opacity: 0.2;
  /* makes whole div faded */
}


.nav {
  background-color: #333;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.nav a:hover {
  background-color: #ddd;
  color: black;
}

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