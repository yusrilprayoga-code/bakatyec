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
    <el-menu-item :style="{width: dynamicWidth}"> </el-menu-item>
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
    <el-menu-item index="/class-menu" v-show="loginAuth">
      <i class="bx bx-book-open" style="margin-right: 10px"></i>
      Kelas Saya
    </el-menu-item>
    <el-menu-item index="#notification" @click="notification">
      <i class="bx bxs-bell"></i>
    </el-menu-item>
    <el-menu-item v-show="loginAuth">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          <i class="bx bxs-user"></i>
          {{ data.User.name }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <i class="bx bx-user"></i>
              Setting Profile
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="bx bx-building-house"></i>
              Bimbingan Prakerja
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="bx bx-book"></i>
              Subskripsi
            </el-dropdown-item>
            <el-dropdown-item @click="logout">
              <i class="bx bx-log-out"></i>
              Logout
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
    <el-menu-item class="" index="/login" v-show="!loginAuth">
      <button class="button-login is-primary is-rounded is-small">Login</button>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, onMounted, reactive, ref } from "vue";
import { ElNotification, ElDropdown } from "element-plus";

const data = reactive({
  User: [],
});

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

const dynamicWidth = computed(() => {
  return loginAuth.value ? "30vw" : "35vw";
});


const loginAuth = ref(localStorage.getItem("token") ? true : false);

const logout = () => {
  localStorage.removeItem("token");
  loginAuth.value = false;
  ElNotification({
    title: "Notifikasi",
    message: "Anda berhasil logout",
    type: "success",
  });
};


const fetchUser = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    data.User = response.data;
    console.log(data.User);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchUser();
});

</script>

<style>
/* .flex-grow { 
        flex-grow: 1;
    } */
.navbar {
  flex-direction: row;
  justify-content: flex-end;
}

.el-menu-demo {
  background-color: #fff;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.button-login {
  background-color: #f05326;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.button-login:hover {
  background-color: #ac3e20;
  color: #fff;
}
</style>
