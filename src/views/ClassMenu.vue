<template>
  <div class="container">
    <el-card class="box-card">
      <el-row class="flex-container">
        <el-col :span="24" :md="12" class="left-col">
          <div class="text">
            <h3 class="text is-bold">
              Redeem Voucher Kelas yang Sudah Anda Beli
              <p>Mia (62882007074645)</p>
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
                <i class="el-icon-arrow-down el-icon--right"></i>
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

                    </el-dropdown-item
                  >
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
              >Redeem</el-button
            >
            <el-button
              v-else
              style="font-size: 16px"
              class="custom-button"
              type="danger"
              @click="Redeemit"
              >Redeem</el-button
            >
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
          <div v-if="activeName === 'first'">
            <!-- Card 1 -->
            <el-row class="flex-containerOne">
              <el-col
                class="col-container"
                v-for="(cardsOne, index) in cardsOne"
                :key="index"
                :span="24"
                :md="5"
                :lg="5"
                :xl="2"
                @click="linkClick"
              >
                <el-card :body-style="{ padding: '0px' }" class="card-class">
                  <img
                    :src="cardsOne.image"
                    class="image"
                    style="width: 100%"
                  />
                  <div style="padding: 14px">
                    <span class="cards-name">{{ cardsOne.name }}</span>
                    <div class="bottom">
                      <span class="cards-price">{{ cardsOne.price }}</span>
                      <el-progress
                        :percentage="cardsOne.percentage"
                        :color="customColor"
                      />
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <!-- Card 2 -->
            <el-row class="flex-containerCard">
              <el-col
                class="col-container"
                v-for="(cardsTwo, index) in cardsTwo"
                :key="index"
                :span="24"
                :md="5"
                :lg="5"
                :xl="2"
                :sm="1"
                @click="linkClick"
              >
                <el-card :body-style="{ padding: '0px' }" class="card-class">
                  <img
                    :src="cardsTwo.image"
                    class="image"
                    style="width: 100%"
                  />
                  <div style="padding: 14px">
                    <span class="cards-name">{{ cardsTwo.name }}</span>
                    <div class="bottom">
                      <span class="cards-price">{{ cardsTwo.price }}</span>
                      <el-progress
                        :percentage="cardsTwo.percentage"
                        :color="customColor"
                      />
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <!-- Card 3 -->
            <el-row class="flex-containerCard">
              <el-col
                class="col-container"
                v-for="(cardsThree, index) in cardsThree"
                :key="index"
                :span="24"
                :md="5"
                :lg="5"
                :xl="2"
                :sm="1"
                @click="linkClick"
              >
                <el-card :body-style="{ padding: '0px' }" class="card-class">
                  <img
                    :src="cardsThree.image"
                    class="image"
                    style="width: 100%"
                  />
                  <div style="padding: 14px">
                    <span class="cards-name">{{ cardsThree.name }}</span>
                    <div class="bottom">
                      <span class="cards-price">{{ cardsThree.price }}</span>
                      <el-progress
                        :percentage="cardsThree.percentage"
                        :color="customColor"
                      />
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <div class="buttonMore">
              <el-button
                ref="buttonMore"
                v-model="buttonMore"
                @click="buttonClick"
                style="background-color: #f05326; color: #fff"
                >Tampilkan Lebih Banyak
              </el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Kelas Subskripsi" name="second">
          <div v-if="activeName === 'second'">
            <!-- Kelas Subskripsi -->
            <div class="subskripsi">
              <p style="text-align: left">
                Kelas - kelas yang tersedia dibawah ini dapat Anda akses hingga
                tanggal
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
                      Akses kelas Anda kembali dengan membeli voucher paket
                      berlangganan
                    </span>
                  </el-col>
                  <el-col :span="24" :md="12" class="right-col-subskripsi">
                    <div class="right-content-subskripsi">
                      <el-button
                        style="font-size: 16px"
                        class="custom-button-subskripsi"
                        type="info"
                        >Beli Paket Berlangganan</el-button
                      >
                    </div>
                  </el-col>
                </el-row>
              </div>
              <h2 style="line-height: 2;">
                Anda Belum Berlangganan. <br />
                <span style="font-size: 16px; font-weight: 300; line-height: 1;" 
                  >Untuk mendapatkan akses ke semua kelas, silakan beli paket
                  berlangganan Anda</span
                >
              </h2>
              <el-button
                style="font-size: 16px; width: 30%;"
                class="custom-button-subskripsi"
                type="info"
                >Beli Paket Berlangganan</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
@import "../views/ClassMenu.css";
</style>
<script>
import { useDisabled } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  data() {
    return {
      redeemCodeinput: [
        { value: "AEG123", disabled: false },
        { value: "12FGGA", disabled: false },
        { value: "NGN232", disabled: false },
        { value: "OKKFJ4", disabled: false },
        { value: "PLPO14", disabled: false },
      ],
      buttonMore: 0,
      redeemCode: "",
      customColor: [
        { color: "#F56C6C", percentage: 20 },
        { color: "#E6A23C", percentage: 40 },
        { color: "#409EFF", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#67C23A", percentage: 100 },
      ],
      cardsOne: [
        {
          name: "Testing MIA",
          image: require("../assets/cover3.png"),
          price: "Rp. 1.000",
          percentage: 50,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Test QA 2",
          image: require("../assets/cover2.png"),
          price: "Rp. 135.000",
          percentage: 24,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Test QA 3",
          image: require("../assets/cover2.png"),
          price: "Rp. 135.000",
          percentage: 46,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Testing Pelayanan",
          image: require("../assets/cover1.png"),
          price: "Rp. 1.500.000",
          percentage: 100,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
      ],

      cardsTwo: [
        {
          name: "Testing MIA",
          image: require("../assets/cover3.png"),
          price: "Rp. 1.000",
          percentage: 50,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Test QA 2",
          image: require("../assets/cover2.png"),
          price: "Rp. 135.000",
          percentage: 10,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Test QA 3",
          image: require("../assets/cover2.png"),
          price: "Rp. 135.000",
          percentage: 60,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Testing QA 5",
          image: require("../assets/cover3.png"),
          price: "Rp. 1.500.000",
          percentage: 90,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
      ],

      cardsThree: [
        {
          name: "Testing MIA",
          image: require("../assets/cover3.png"),
          price: "Rp. 1.000",
          percentage: 0,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Test QA 2",
          image: require("../assets/cover2.png"),
          price: "Rp. 135.000",
          percentage: 45,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Test QA 3",
          image: require("../assets/cover2.png"),
          price: "Rp. 135.000",
          percentage: 89,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
        {
          name: "Testing Back End 1",
          image: require("../assets/cover1.png"),
          price: "Rp. 1.500.000",
          percentage: 99,
          status: "success",
          activeName: "first",
          currentDate: new Date(),
        },
      ],
      activeName: "first",
    };
  },

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

    handleClick(tab, event) {
      console.log(tab, event);
    },

    linkClick() {
      this.$router.push("/detail-class");
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

    buttonClick() {
      if (this.buttonMore < 3) {
        this.cardsThree.push(
          {
            name: "Testing MIA",
            image: require("../assets/cover3.png"),
            price: "Rp. 1.000",
            percentage: 50,
            status: "success",
            activeName: "first",
            currentDate: new Date(),
          },
          {
            name: "Test QA 2",
            image: require("../assets/cover2.png"),
            price: "Rp. 135.000",
            percentage: 24,
            status: "success",
            activeName: "first",
            currentDate: new Date(),
          },
          {
            name: "Test QA 3",
            image: require("../assets/cover2.png"),
            price: "Rp. 135.000",
            percentage: 46,
            status: "success",
            activeName: "first",
            currentDate: new Date(),
          },
          {
            name: "Testing Front End 1",
            image: require("../assets/cover1.png"),
            price: "Rp. 1.500.000",
            percentage: 100,
            status: "success",
            activeName: "first",
            currentDate: new Date(),
          }
        );
        this.buttonMore += 1;
        const contentElement = document.querySelector(".content");
        if (contentElement) {
          contentElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        if (this.buttonMore === 3) {
          this.buttonMore = useDisabled;
          this.$refs.buttonMore.disabled = true;
        }
      }
    },
  },
};
</script>
