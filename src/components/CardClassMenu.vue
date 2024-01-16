<template>
  <el-row class="flex-containerOne">
    <el-table class="loading" v-if="loading" v-loading="loading">
          <b-spinner></b-spinner>
      </el-table>
    <div v-if="error" class="error">{{ error }}</div>
    <el-col
      class="col-container"
      v-for="cardsOne in cardss"
      :key="cardsOne.id"
      :span="24"
      :md="5"
      :lg="5"
      :xl="2"
      @click="linkClick(cardsOne.id)"
    >
      <el-card
        :body-style="{ padding: '0px' }"
        class="card-class"
        style="cursor: pointer"
      >
        <img :src="
          `http://127.0.0.1:8000/images/` + cardsOne.class_thumbnail 
        " style="width: 100%" />
        <div style="padding: 14px">
          <span class="cards-name">
            {{ cardsOne.className.substring(0, 15) + "..."}}
          </span>
          <div class="bottom">
            <span class="cards-price">{{ cardsOne.price }}</span>
            <el-progress :color="customColor" />
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <div class="buttonMore">
    <el-button v-show="buttonShow"
      ref="buttonMore"
      v-model="buttonMore"
      @click="buttonClick"
      style="background-color: #f05326; color: #fff"
      >Tampilkan Lebih Banyak
    </el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cardss: [],
      progressClass: [],
      loading: true,
      error: null,
      buttonMore: 0,
      customColor: [
        { color: "#F56C6C", percentage: 20 },
        { color: "#E6A23C", percentage: 40 },
        { color: "#409EFF", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#67C23A", percentage: 100 },
      ],
    };
  },

  methods: {
    redirect() {
      this.$router.push("/class-prakerja");
    },

    linkClick(id) {
      this.$router.push(`/detail-class/${id}`);
    },

    buttonClick() {
      this.buttonMore += 5;
    },

    async getCardss() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/user/classes",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        
        this.loading = false;
        this.cardss = response.data.user_class.map((userClassItem) => {
          return {
            id: userClassItem.id,
            progress: userClassItem.progress,
            className: userClassItem.class.class_name,
            class_thumbnail: userClassItem.class.class_thumbnail,
          };
        });

        console.log(this.cardss);
      } catch (error) {
        console.error("Error fetching user classes:", error);
      }
    },

    getProgressByCardId(cardId) {
      const progress = this.progressClass.find((progressOne) => progressOne.id === cardId);
      return progress ? progress.progress : 0;
    },

    async getCardsProgressbyUserId() {
      try{
        const response = await axios.get("http://127.0.0.1:8000/api/user/classes",{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.progressClass = response.data.data;
        console.log(this.progressClass);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getCardss();
    this.getCardsProgressbyUserId();
  },

  computed: {
    buttonShow() {
      return this.buttonMore < this.cardss.length;
    },
  },
};
</script>

<style>
@import "../css/ClassMenu.css";
</style>
