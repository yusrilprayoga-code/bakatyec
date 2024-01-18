<template>
    <div class="boxContent">
        <div id="1" style="display: none;">
            <img src="../assets/1.png" width="100%" height="auto" alt="">
        </div>
        <div id="2" style="display: none;">
            <iframe width="100%" style="height:30vw" src="https://www.youtube.com/embed/RunuGmKxwCU?si=UoTb7sFXGWFxLmNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>

</template>
<script>

import axios from "axios";
export default {

  data() {
    return  {
      id: this.$route.params.id,
      kelas: {},
    }
  },

  methods: {
    async getMateri() {
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
        this.kelas = response.data;
        console.log(this.kelas);
        } catch (error) {
            console.error("Error fetching user classes:", error);
        }
    },
    },

  mounted() {
    const jenis = 2;
    // 1 merupakan id dari type mengerjakan tugas
    // 2 merupakan id dari type menonton video
    // 3 merupakan id dari type membaca e book

      const element = document.getElementById(jenis);
      if (element) {
        element.style.display = 'flex';
      }
  },
  
};
</script>