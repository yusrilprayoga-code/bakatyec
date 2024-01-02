<template>
  <div id="App">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts" setup >
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

</script>

<style>
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eff2f7;
}

body{
  margin: 0;
}

.el-menu-demo {
  font-size: 14px;
  height: 70px;
  line-height: 60px;
  width: 100%;
  top: 0;
  z-index: 100;
  margin-bottom: auto;
  position: sticky;
}

.el-menu-demo .el-menu-item {
  font-size: 15px;
  color: #2c3e50;
}

.el-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.footer-container {
  justify-content: center;
  margin: 0 auto;
  width: 70%;
}

.alamat {
  text-align: left;
  flex: 1;
  max-width: 100%; 
}

.tentangkami {
  text-align: left;
  flex: 1;
  max-width: 100%; 
}

.customerService {
  text-align: left;
  flex: 1;
  max-width: 100%; 
}
</style>
