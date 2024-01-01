<template>
    <div>
        <el-row>
        <el-col :span="24">
            <el-card class="box-card">
            <div class="clearfix" style="margin-bottom: 20px;">
                <span>Pencarian Program</span>
            </div>
            <el-input
                style="margin-top: 20px; margin-bottom: 20px;"
                placeholder="Masukkan kata kunci"
                prefix-icon="el-icon-search"
                clearable
            ></el-input>
            <el-button type="primary" @click="open">Cari</el-button>
            <p>
                Masih dalam tahap pengembangan
            </p>
            <router-link to="/" >
                <el-button type="primary" >Kembali</el-button>
            </router-link>
            </el-card>
        </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "PencarianProgramView",
    methods: {
        open() {
            this.$router.push({ name: "hasil-pencarian" });
        },
    },

}
</script>

<style>

</style>