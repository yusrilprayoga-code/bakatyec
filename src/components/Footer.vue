<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <el-footer>
      <el-row :gutter="30" style="justify-content: center; margin-left: 20px;" class="footer-container">
        <!-- Tentang Kami -->
        <el-col class="tentangkami" :span="24" :md="8">
          <img src="../assets/logo.png" alt="Yec" width="50%" />
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
              <a href="https://www.youtube.com/channel/UCZ9Z8QqZJ8Q4Z9Z8QqZJ8Q4w" target="_blank">
                <i class="bx bxl-youtube" style="font-size: 30px"></i>
              </a>
            </el-col>
            <el-col :span="3">
              <a href="https://t.me/yec_co_id" target="_blank">
                <i class="bx bxl-telegram" style="font-size: 30px"></i>
              </a>
            </el-col>
          </el-row>
          <p style="font-size: 16px">
            Email : prakerja@yec.co.id
          </p>
          <p style="font-size: 16px">
            CS: +62 853-3584-9962 (WhatsApp Chat)
          </p>
        </el-col>
      </el-row>
    </el-footer>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer'
});
</script>

<style></style>