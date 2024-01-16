<template>
    <div class="container" style="text-align: start; margin-top: 50px;">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><a href="#/class-menu" style="color: #f05326;">Kelas Saya</a></el-breadcrumb-item>
            <el-breadcrumb-item>
                <p style="color: #f05326; margin: 0; font-weight: bold;">Detail Kelas</p>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <!-- <h2>Menggunakan Bahasa Inggris Bagi Calon Sekretaris</h2> -->
        <h2>{{ className }}</h2>
        <DetailContent />
    </div>
</template>
<style>
@import '../css/DetailClass.css';
</style>

<script>
import axios from "axios";
import DetailContent from "../components/DetailContent.vue";

export default {
    // props: ['id'],
    data() {
        return {
            id: this.$route.params.id,
            kelas: null,
        }
    },
    async mounted() {
        try {
            const response = await axios.get(
          `http://127.0.0.1:8000/api/user/classes/` + this.id,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // this.loading = false;
        this.kelas = response.data.map((kelas_item) => {
          return {
            user_id: kelas_item.class.user_id,
            className: kelas_item.class.class_name,
          };
        });
        } catch (error) {
            console.error("Error fetching user classes:", error);
        }
    },
    components: {
        DetailContent,
    },
};
</script>

  