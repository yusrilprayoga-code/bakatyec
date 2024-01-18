<template>
  <div class="boxContent">
    <img
      :src="`http://127.0.0.1:8000/images/` + kelas.class_thumbnail"
      alt="Class Image"
      width="100%"
      height="auto"
    />
    <el-tabs
      style="padding: 30px"
      v-model="activeName"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Deskripsi" name="first">
        <div class="content">
          <p>
            {{ kelas.class_desc }}
          </p>
          <h3>Bidang Studi</h3>
          <p>
            {{ category.category_name }}
          </p>
          <h3>Lembaga Pengajaran</h3>
          <el-row>
            <el-col :span="8" style="padding: 40px">
              <img src="../assets/logo2.png" alt="Logo" width="100%" />
            </el-col>
            <el-col :span="16">
              <p>
                Yureka Education Center (YEC) berdiri pada tahun 2010 dengan
                nama awal Eureka Tour, sebuah layanan jasa tour spesialis
                Kampung Inggris. Saat ini YEC fokus membantu setiap peserta
                menjadi individu lebih baik. Tidak hanya sebatas menjadi jasa
                tour, namun juga menjadi konsultan pendidikan dan media yang
                membantu menjadikan diri lebih baik dengan kemudahan akses
                informasi dan program pelatihan terkait tes TOEFL, IELTS,
                Persiapan Kerja dan Pembelajaran Bahasa Inggris Sehari-hari.
              </p>
            </el-col>
          </el-row>
          <h3>Lembaga Pengajaran</h3>
          <el-row>
            <el-col
              :span="8"
              v-for="fasilDetail in fasilDetailvalue"
              :key="fasilDetail.fasilId"
            >
              <img
                :src="fasilDetail.fasilPhoto"
                alt="Fasilitator 1"
                width="70%"
                style="border-radius: 50%"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col
              v-for="fasilDetail in fasilDetailvalue"
              :key="fasilDetail.fasilId"
            >
              <p>{{ fasilDetail.fasilDesc }}</p>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Ulasan" name="second">
        <div class="content">
          <h2>Ulasan Anda</h2>
          <el-rate size="large" v-model="value1" />
          <el-input
            style="margin-top: 20px"
            v-model="textarea"
            :rows="6"
            type="textarea"
            placeholder="Berikan Ulasan Anda"
            @change="textareaChange"
          />
          <el-button
            style="
              border-radius: 999;
              margin-top: 20px;
              padding: 0px;
              background-color: #f05326;
              color: #ffffff;
            "
            @click="submit"
            >Submit</el-button
          >
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
@import "../css/DetailClass.css";
</style>

<script>
// import { ref } from 'vue'
// import { TabsPaneContext } from 'element-plus'

// const value1 = ref(null)
// const activeName = ref('first')
// const textarea = ref('')

// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }

import axios from "axios";

export default {
  data() {
    return {
      activeName: "first",
      value1: null,
      textarea: "",
      id: this.$route.params.id,
      kelas: {},
      fasil: {},
      fasilDetailvalue: [],
      category: [],
    };
  },
  mounted() {
    this.getDataClassDetail();
    this.getFasilDetail();
    this.getfasildetails();
    this.getDataCategory();
  },

  methods: {
    async getDataClassDetail() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/user/classes/${this.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // this.loading = false;
        this.kelas = response.data.class;
        console.log(this.kelas);
      } catch (error) {
        console.error("Error fetching user classes:", error);
      }
    },

    async getDataCategory() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/user/classes/${this.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        this.category = response.data.class.category
        console.log(this.category);
      } catch (error) {
        console.error("Error fetching user classes:", error);
      }
    },

    async getFasilDetail() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/user/classes/${this.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        this.fasil = response.data.class.class_fasil;
        console.log(this.fasil);
      } catch (error) {
        console.error("Error fetching user classes:", error);
      }
    },

    async getfasildetails() {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/user/classes/${this.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.fasilDetailvalue = response.data.class.class_fasil.map(
        (fasilDetail) => {
          return {
            fasilId: fasilDetail.id,
            fasilName: fasilDetail.fasil.fasil_name,
            fasilDesc: fasilDetail.fasil.fasil_desc,
            fasilPhoto: fasilDetail.fasil.fasil_photo,
          };
        }
      );
      console.log(this.fasilDetailvalue);
    },
  },
};
</script>
