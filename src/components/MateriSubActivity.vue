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
export default {
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