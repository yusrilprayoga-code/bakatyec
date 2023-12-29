<template>
    <el-menu>
        <el-menu-item index="0">
            <img 
                style="width: 230px"
                src="../assets/logo.png"
                alt="logo"
            />
        </el-menu-item>
        <el-menu-item style="width: 60vw">
        </el-menu-item>
        <el-menu-item index="1">Beranda</el-menu-item>
        <el-menu-item index="2">Kelas Prakerja</el-menu-item>
        <el-menu-item index="3">Privacy</el-menu-item>
        <el-menu-item index="4">Kelas Saya</el-menu-item>
    </el-menu>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
    name: 'NavBar'
    });
</script>

<style>
    /* .flex-grow { 
        flex-grow: 1;
    } */
    .navbar{ 
        flex-direction: row;
        justify-content: flex-end;
    }
</style>