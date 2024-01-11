<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="home">
    <el-carousel :interval="4000" indicator-position="none" height="500px">
      <el-carousel-item>
        <div class="item">
          <img class="item_image" src="../assets/1.png" alt="" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item">
          <img class="item_image" src="../assets/2.png" alt="" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item">
          <img class="item_image" src="../assets/3.png" alt="" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item">
          <img class="item_image" src="../assets/4.png" alt="" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item">
          <img class="item_image" src="../assets/5.png" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <h2>Kelas Prakerja 2023 yang Tersedia</h2>
      <el-row class="flex-container">
          <el-col
              class="col-container"
              v-for="kelas in kelass" :key="kelas.id"
              :span="24"
              :md="5"
              :lg="5"
              :xl="2">
              <el-card :body-style="{ padding: '0px' }" class="card-class">
                  <img 
                      src="../assets/classImage.jpg" 
                      class="image"
                      style="width: 100%;"
                   />
                  <div style="padding: 14px;" >
                      <p class="card-name">
                        {{ kelas.class_name.substring(0, 10)  }}
                      </p>
                      <div class="bottom">
                          <p class="price">Rp 1.500.000</p>
                      </div>
                      <div class="bottom">
                          <el-button type="danger button" @click="open" plain round>Beli Kelas Online</el-button>
                          <!-- <router-link :to="{ name: 'details' }"></router-link> -->
                      </div>
                  </div>
              </el-card>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "axios";
export default {
  name: "BerandaView",
    data() {
      return {
        kelass: [],
      };
    },

  methods: {
    open() {
      //pilih platform pembelian
      ElMessageBox.confirm("", "Pilih Platform Pembelian", {
        confirmButtonText: "Tokopedia",
        confirmButtonClass: "el-button--success",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "Redirecting to Tokopedia",
          });
          window.open("https://www.tokopedia.com/", "_blank");
        })
        .catch(() => {
          ElMessage({
            type: "warning",
            message: "Canceled",
          });
        });
    },

    async fetchClasses() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/classes', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        this.kelass = response.data ? response.data.data : [];
        console.log(this.kelass);
      } catch (error) {
        console.log(error);
      }
    },
},


  async mounted() {
    await this.fetchClasses();
  },
};
</script>

<style scoped>
.el-carousel {
  width: 100%;
  height: 100%;
}

.item {
  width: 100%;
  height: 100%;
}

.item_image {
  width: 100%;
  height: 100%;
}

.home {
  margin: 50px 100px 50px 100px;
}
.button {
  width: 60%;
  padding: 10px;
}
p {
  text-align: justify;
  text-justify: inter-word;
}
.footer {
  height: auto;
  padding-top: 30px;
  background-color: white;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.price {
  font-weight: bold;
  font-size: 16px;
  color: #35a9be;
}

.bottom {
  margin-top: 5px;
  line-height: 12px;
  display: flex;
  justify-content: space;
  align-items: center;
}

.image {
  width: 100%;
  object-fit: cover;
}

.card-name {
  font-weight: bold;
  line-height: normal;
  font-size: 18px;
}
.card-class {
  background-color: transparent;
  box-shadow: none;
  border: none;
}
</style>
