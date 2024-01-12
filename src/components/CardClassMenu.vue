<template>
  <el-row class="flex-containerOne">
    <el-col
      class="col-container"
      v-for="(cardsOne) in cardss"
      :key="cardsOne.id"
      :span="24"
      :md="5"
      :lg="5"
      :xl="2"
      @click="linkClick"
    >
      <el-card
        :body-style="{ padding: '0px' }"
        class="card-class"
        style="cursor: pointer"
      >
        <img src="../assets/cover3.png" class="image" style="width: 100%" />
        <div style="padding: 14px">
          <span class="cards-name">{{ cardsOne.class_name.substring(0,10) }}</span>
          <div class="bottom">
            <span class="cards-price">{{ cardsOne.price }}</span>
            <el-progress
              :percentage="getProgressByCardId(cardsOne.id)"
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
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      cardss: [],
      progressClass: [],
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

    handleClick(tab, event) {
      console.log(tab, event);
    },

    linkClick() {
      this.$router.push("/detail-class");
    },

    buttonClick() {
      this.buttonMore += 1;
    },

    async getCardss() {
      try {
    const response = await axios.get("http://127.0.0.1:8000/api/classes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }) 
    this.cardss = response.data.data;
    console.log(this.cardss);
   } catch (error) {
     console.log(error);
   }
    },

    getProgressByCardId(cardId) {
      const progress = this.progressClass.find((progressOne) => progressOne.id === cardId);
      return progress ? progress.progress : 0;
    },

    async getCardsProgressbyUserId() {
      try{
        const response = await axios.get("http://127.0.0.1:8000/api/userclasses",{
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
};
</script>

<style>
@import "../css/ClassMenu.css";
</style>
