<!-- eslint-disable vue/multi-word-component-names -->
<template><div class="nav">
    <!-- <a href="#" > </a>
    <a href="#" > </a> -->
    <router-link to="/">Home </router-link>
    <router-link to="/add">Add Restaurant </router-link>
    <!-- <router-link to="update">Update </router-link> -->
    <a v-on:click="logout" href="#" > Logout</a>
</div>
</template>
<script>
// import router from '@/routers';
            
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    methods: {
logout() {
  localStorage.clear();
  this.$router.push("/login");
}

    }
}


</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
.nav a:hover{
    background-color: #ddd;
    color: black;
}

</style>
