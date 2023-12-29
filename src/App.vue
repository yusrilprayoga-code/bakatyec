<template>
  <div id="App">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router="true"
    >
      <el-menu-item index="0">
        <img style="width: 230px" src="./assets/logo.png" alt="logo" />
      </el-menu-item>
      <el-menu-item style="width: 43vw"> </el-menu-item>
      <el-menu-item index="/">
        <i class="bx bx-home" style="margin-right: 10px"></i>
        Beranda
      </el-menu-item>
      <el-menu-item index="/class-prakerja">
        <i class="bx bx-building-house" style="margin-right: 10px"></i>
        Kelas Prakerja
      </el-menu-item>
      <el-menu-item index="3">
        <i class="bx bx-book" style="margin-right: 10px"></i>
        Privacy
      </el-menu-item>
      <el-menu-item index="/class-menu">
        <i class="bx bx-book-open" style="margin-right: 10px"></i>
        Kelas Saya
      </el-menu-item>
    </el-menu>
    <router-view />
    <el-footer
    >
      <el-row :gutter="20" class="footer-container">
        <!-- Tentang Kami -->
        <el-col class="tentangkami" :span="24" :md="8">
          <img src="./assets/logo.png" alt="Yec" width="50%" />
          <p style="font-size: 16px">
            Sertifikasi dan Kelas Bahasa Inggris Online. Mengembangkan kelas
            bahasa Inggris inklusif untuk semua orang, serta kelas pengembangan
            diri lainnya
          </p>
          <p style="font-size: 16px">
            Lembaga Pelatihan YEC CO ID juga tergabung dalam program Kartu
            Prakerja dan berafiliasi dengan Digital Platform seperti Karier.mu,
            Tokopedia, Pintar, Pijar Mahir, dan Bukalapak.
          </p>
        </el-col>

        <!-- Kontak Kami -->
        <el-col :span="24" :md="8" class="alamat">
          <h4 style="font-weight: bold; font-size: 20px;">Alamat</h4>
          <p style="font-size: 16px">
            Jl. Nogotirto no.14 Modinan Banyuraden Gamping Sleman Yogyakarta
            55293
          </p>
        </el-col>

        <!-- Ikuti Kami -->
        <el-col :span="24" :md="8" class="customerService">
          <h4 style="font-weight: bold; font-size: 20px;">Customer Service</h4>
          <el-row>
            <el-col :span="3">
              <a href="https://www.facebook.com/yec.co.id" target="_blank">
                <i class="bx bxl-facebook-square" style="font-size: 30px"></i>
              </a>
            </el-col>
            <el-col :span="3">
              <a href="https://www.instagram.com/yec.co.id/" target="_blank">
                <i class="bx bxl-instagram-alt" style="font-size: 30px"></i>
              </a>
            </el-col>
            <el-col :span="3">
              <a
                href="https://www.youtube.com/channel/UCZ9Z8QqZJ8Q4Z9Z8QqZJ8Q4w"
                target="_blank"
              >
                <i class="bx bxl-youtube" style="font-size: 30px"></i>
              </a>
            </el-col>
          </el-row>
          <p style="font-size: 16px">
            Email : prakerja@yec.co.id
          </p >
          <p style="font-size: 16px">
            CS: +62 853-3584-9962 (WhatsApp Chat)
          </p>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eff2f7;
}

.el-menu {
  font-size: 14px;
  height: 70px;
  line-height: 60px;
  width: 100%;
  top: 0;
  z-index: 100;
  margin-bottom: auto;
  position: sticky;
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
