<template>
  <div class="container">
    <el-card class="box-card">
      <el-row class="flex-container">
        <el-col :span="24" :md="12" class="left-col">
          <div class="text">
            <h3 class="text is-bold">
              Redeem Voucher Kelas yang Sudah Anda Beli
              <p
              >
                Dengan Akun {{ name }} (62882007074645)
              </p>
            </h3>
          </div>
          <div class="card-redeem">
            <h4 class="is-bold">
              Kebijakan Menukar Kode Redeem dan Kode Voucher Khusus Prakerja:
            </h4>
            <p style="margin-top: -15px">
              Kamu hanya bisa menukarkan kode redeem dan kode voucher pada
              jadwal hari pertama pelatihanmu,
              <strong>
                yaitu 1 jam sebelum pelatihan hari pertamamu dimulai dan
                maksimal 1 jam setelah pelatihan hari pertamamu dimulai.</strong
              >
            </p>
            <div
              class="card-redeem-button"
              style="display: flex; align-items: center; margin-top: -15px"
            >
              <h4 class="is-bold" style="font-size: 14px">
                Tutorial tata cara redeem kode voucher dan kode redeem
              </h4>
              <el-button
                style="
                  margin-top: 20px;
                  margin-left: 5px;
                  font-size: 12px;
                  width: 100px;
                  height: 20px;
                  justify-content: center;
                  align-items: center;
                  font-weight: bold;
                  background-color: #f05326;
                  color: #fff;
                "
                @click="redirect"
                >Klik Disini<el-icon-arrow-right></el-icon-arrow-right
              ></el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="24" :md="12" class="right-col">
          <div class="right-content">
            <el-input
              type="info"
              v-model="redeemCode"
              placeholder="Masukkan Kode Voucher"
              class="custom-input"
            ></el-input>
            <el-dropdown style="border: none">
              <span
                class="el-dropdown-link"
                style="color: red; font-size: 14px; margin-bottom: 30px"
              >
                Gunakan Kode Redeem Kartu Prakerja
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(item, index) in redeemCodeinput"
                    :key="index"
                    :disabled="item.disabled"
                    @click="handleClickRedeem(item)"
                  >
                    {{ item.value }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button
              v-if="redeemCode === ''"
              :disabled="true"
              style="font-size: 16px"
              class="custom-button"
              type="info"
              @click="Redeemit"
            >
              Redeem
            </el-button>
            <el-button
              v-else
              style="font-size: 16px"
              class="custom-button"
              type="danger"
              @click="Redeemit"
            >
              Redeem
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div class="content">
      <el-tabs
        tab-position="top"
        v-model="activeName"
        @tab-click="handleClick"
        class="tab-class"
      >
        <el-tab-pane label="Kelas Satuan" name="first">
          <div v-if="activeName === 'first'" >
            <!-- Card Class Menu -->
            <card-class-menu />
            
          </div>
        </el-tab-pane>
        <el-tab-pane label="Kelas Subskripsi" name="second">
          <div v-if="activeName === 'second'">
            <!-- Kelas Subskripsi -->
            <class-subskripsi />
            
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
@import "../css/ClassMenu.css";
</style>
<script>
import { ElMessage} from "element-plus";
import CardClassMenu from "@/components/CardClassMenu.vue";
import ClassSubskripsi from '@/components/ClassSubskripsi.vue';
import axios from 'axios';
export default {
  components: { CardClassMenu, ClassSubskripsi },
  data() {
    return {
      name: "",
      redeemCodeinput: [
        { value: "AEG123", disabled: false },
        { value: "12FGGA", disabled: false },
        { value: "NGN232", disabled: false },
        { value: "OKKFJ4", disabled: false },
        { value: "PLPO14", disabled: false },
      ],
      redeemCode: "",

      activeName: "first",
    };
  },

  methods: {

    redirect() {
      this.$router.push("/class-prakerja");
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },

    Redeemit() {
      if (this.redeemCode === "") {
        ElMessage({
          type: "error",
          message: "Kode Voucher Tidak Boleh Kosong",
        });
      } else if (
        this.redeemCode === "AEG123" ||
        this.redeemCode === "12FGGA" ||
        this.redeemCode === "NGN232" ||
        this.redeemCode === "OKKFJ4" ||
        this.redeemCode === "PLPO14"
      ) {
        ElMessage({
          type: "success",
          message: "Redeem Berhasil",
        });
      } else {
        ElMessage({
          type: "error",
          message: "Kode Voucher Tidak Valid",
        });
      }
    },

    handleClickRedeem(item) {
      this.redeemCode = item.value;
      this.redeemCodeinput.forEach((element) => {
        if (element.value === item.value) {
          element.disabled = true;
        }
      });
    },

    async fetchName() {
      try{
        const response = await axios.get("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.name = response.data.data.name;
        console.log(this.name);
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.fetchName();
  },
};
</script>
