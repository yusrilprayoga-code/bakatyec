<template>
  <div class="subskripsi">
    <p style="text-align: left">
      Kelas - kelas yang tersedia dibawah ini dapat Anda akses hingga tanggal
      <el-button
        style="
          margin-top: 20px;
          margin-left: 10px;
          color: #f05326;
          font-weight: bold;
          background-color: none;
          border: none;
        "
        text
        @click="open"
        >Lihat Paket Subskripsi Saya</el-button
      >
    </p>
    <div
      class="custom-card-subkripsi"
      style="
        background-color: #fff;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        align-items: center;
        justify-content: center;
        text-align: left;
      "
    >
      <el-row>
        <el-col :span="24" :md="12" class="left-col">
          <p class="is-bold">Paket berlangganan Anda telah habis</p>
          <span style="font-size: 14px">
            Akses kelas Anda kembali dengan membeli voucher paket berlangganan
          </span>
        </el-col>
        <el-col :span="24" :md="12" class="right-col-subskripsi">
          <div class="right-content-subskripsi">
            <el-button
              style="font-size: 16px"
              class="custom-button-subskripsi"
              type="info"
              @click="openLangganan"
              >Beli Paket Berlangganan</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
    <h2 style="line-height: 2">
      Anda Belum Berlangganan. <br />
      <span style="font-size: 16px; font-weight: 300; line-height: 1"
        >Untuk mendapatkan akses ke semua kelas, silakan beli paket berlangganan
        Anda</span
      >
    </h2>
    <el-button
      style="font-size: 16px; width: 30%"
      class="custom-button-subskripsi"
      type="info"
      @click="openLangganan"
      >Beli Paket Berlangganan</el-button
    >
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
export default {
    methods: {
        open() {
      ElMessageBox.confirm("Beli Paket Berlangganan?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "Beli Paket Berlangganan Berhasil",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Beli Paket Berlangganan Dibatalkan",
          });
        });
    },

    openLangganan() {
      ElMessageBox.confirm("Beli Paket Berlangganan?", "Konfirmasi Pembelian", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "Redirecting to Shop Yec",
          });
          window.open("https://shop.yec.co.id/", "_blank");
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Beli Paket Berlangganan Dibatalkan",
          });
        });
    },

    redirect() {
      this.$router.push("/class-prakerja");
    },

    }
}
</script>

<style></style>
