<template>
    <div class="container" style="text-align: start; margin-top: 50px;" >
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
            ><a href="#/class-menu" style="color: #f05326;">Kelas Saya</a></el-breadcrumb-item
            >
            <el-breadcrumb-item>
                <p style="color: #f05326; margin: 0; font-weight: bold;">Detail Kelas</p>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <h2>Menggunakan Bahasa Inggris Bagi Calon Sekretaris</h2>
        <el-row justify="space-between">
            <el-col :span="24" :md={span:15}>
                <MateriSubActivity style="display: none;" />
                <MateriDetailClass />
            </el-col>
            <el-col :span="24" :md={span:8}>
                <ActivityDetailClass />
            </el-col>

        </el-row>
    </div>
</template>
<style>
    @import '../css/DetailClass.css';
</style>

<script setup lang="ts">
    import MateriDetailClass from '../components/MateriDetailClass.vue'
    import ActivityDetailClass from '../components/ActivityDetailClass.vue'
    import MateriSubActivity from '../components/MateriSubActivity.vue'
</script>