<template>
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
      <el-card
        :body-style="{ padding: '0px' }"
        class="card-class"
        style="cursor: pointer"
      >
        <img :src="cardsOne.image" class="image" style="width: 100%" />
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
      <el-card
        :body-style="{ padding: '0px' }"
        class="card-class"
        style="cursor: pointer"
      >
        <img :src="cardsTwo.image" class="image" style="width: 100%" />
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
      <el-card
        :body-style="{ padding: '0px' }"
        class="card-class"
        style="cursor: pointer"
      >
        <img :src="cardsThree.image" class="image" style="width: 100%" />
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
</template>

<script>
import { useDisabled } from "element-plus";
export default {
  data() {
    return {
      buttonMore: 0,
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

<style>
@import "../css/ClassMenu.css";
</style>
