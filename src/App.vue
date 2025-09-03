<template>
  <!-- <div id="app">
    <SignUp />
  </div> -->
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
.logo {
  width: 100px;
  display: block;
  margin: 0 auto;
}

.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  display: block;
}

.register button,
.login button,
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

body {
  padding: 0;
  margin: 0;
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
</style>
