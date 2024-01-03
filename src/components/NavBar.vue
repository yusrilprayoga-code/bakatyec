<template>
  <el-menu
      :default-active="activeIndex2"
      active-text-color=" #f05326"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router="true"
    >
      <el-menu-item index="0">
        <img style="width: 230px" src="../assets/logo.png" alt="logo" />
      </el-menu-item>
      <el-menu-item style="width: 31vw"> </el-menu-item>
      <el-menu-item index="/">
        <i class="bx bx-home" style="margin-right: 10px"></i>
        Beranda
      </el-menu-item>
      <el-menu-item index="/class-prakerja">
        <i class="bx bx-building-house" style="margin-right: 10px"></i>
        Kelas Prakerja
      </el-menu-item>
      <el-menu-item index="/privacy">
        <i class="bx bx-book" style="margin-right: 10px"></i>
        Privacy
      </el-menu-item>
      <el-menu-item index="/class-menu">
        <i class="bx bx-book-open" style="margin-right: 10px"></i>
        Kelas Saya
      </el-menu-item>
      <el-menu-item index="#notification" @click="notification">
        <i class='bx bxs-bell'></i>
      </el-menu-item>
      <el-menu-item>
        <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      <i class='bx bxs-user'></i>
      MIA
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <i class='bx bx-user'></i>
          Setting Profile
        </el-dropdown-item>
        <el-dropdown-item>
          <i class='bx bx-building-house' ></i>
          Bimbingan Prakerja
        </el-dropdown-item>
        <el-dropdown-item>
          <i class='bx bx-book' ></i>
          Subskripsi
        </el-dropdown-item>
        <el-dropdown-item>
          <i class='bx bx-log-out' ></i>
          Logout
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
      </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElNotification, ElDropdown } from "element-plus";
const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const notification = () => {
  ElNotification({
    title: "Notifikasi",
    message: "Fitur ini masih dalam pengembangan",
    type: "warning",
  });
};

</script>

<style>
/* .flex-grow { 
        flex-grow: 1;
    } */
.navbar {
  flex-direction: row;
  justify-content: flex-end;
}
</style>
