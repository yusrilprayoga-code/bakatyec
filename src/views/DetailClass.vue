import DetailCSS from 

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
                <div class="boxContent">
                    <div id="deskripsiKelas">
                        <img src="../assets/classImage.jpg" alt="Class Image" width="100%" height="auto">
                        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                            <el-tab-pane label="Deskripsi" name="first">
                                <div class="content">
                                    <p>
                                        Menggunakan Bahasa Inggris Bagi Calon Sekretaris adalah kelas yang disusun khusus untuk peserta yang ingin belajar Bahasa Inggris khususnya bagi yang berprofesi sebagai Sekretaris. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 27 Tahun 2009.
                                        Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi seorang calon sekretaris meliputi perkenalan okupasi sekretaris, cakupan tugas, dan pentingnya belajar Bahasa Inggris bagi sekretaris, orang-orang di tempat kerja (people at work), membuat dan menerima panggilan (making and receiving calls), menerima dan memberi pesan (taking and giving messages), menyambut dan menerima tamu (welcoming and receiving visitors), dan membuat surat, memo, dan permohonan (letters, inter-office memos, and requests) mengingat banyaknya perusahaan multinasional yang terdapat di Indonesia serta pentingnya penguasaan Bahasa Inggris sebagai bahasa internasional.
                                    </p>
                                    <h3>Bidang Studi</h3>
                                    <p>Kelas Prakerja 2023 yang Tersedia</p>
                                    <h3>Lembaga Pengajaran</h3>
                                    <el-row>
                                        <el-col :span="8" style="padding: 40px;">
                                            <img src="../assets/logo2.png" alt="Logo" width="100%">
                                        </el-col>
                                        <el-col :span="16">
                                            <p>Yureka Education Center (YEC) berdiri pada tahun 2010 dengan nama awal Eureka Tour, sebuah layanan jasa tour spesialis Kampung Inggris. Saat ini YEC fokus membantu setiap peserta menjadi individu lebih baik. Tidak hanya sebatas menjadi jasa tour, namun juga menjadi konsultan pendidikan dan media yang membantu menjadikan diri lebih baik dengan kemudahan akses informasi dan program pelatihan terkait tes TOEFL, IELTS, Persiapan Kerja dan Pembelajaran Bahasa Inggris Sehari-hari.</p>
                                        </el-col>
                                    </el-row>
                                    <h3>Lembaga Pengajaran</h3>
                                    <el-row>
                                        <el-col :span="8">
                                            <img src="../assets/fasilitator1.jpg" alt="Fasilitator 1" width="70%" style="border-radius: 50%;">
                                        </el-col>
                                        <el-col :span="8">
                                            <img src="../assets/fasilitator2.jpg" alt="Fasilitator 2" width="70%" style="border-radius: 50%;">
                                        </el-col>
                                        <el-col :span="8">
                                            <img src="../assets/fasilitator3.jpg" alt="Fasilitator 3" width="70%" style="border-radius: 50%;">
                                        </el-col>
                                    </el-row>
                                    <p>Lusia Lian Trisna, adalah seorang TOEFL Learning and Development’s Project Manager di PT Yureka Edukasi Cipta sejak tahun 2018 hingga sekarang yang bertugas mengelola tim dalam pengembangan produk/program pembelajaran dan TOEFL prediksi, serta mengajar di kelas-kelas TOEFL online sebagai tenaga pengajar senior. Berpengalaman sebagai guru bahasa Inggris di SM3T I SMA Negeri 1 Pido (2015-2016),Class Management & English Trainer di International College (2016 - 2017), serta guru bahasa Inggris di SMAN Kasihan Yogyakarta (2017). Memiliki latar belakang pendidikan S1-Pendidikan Bahasa Inggris di Universitas Muhammadiyah Purwokerto dan Program Profesi Guru Pendidikan Bahasa Inggris di Universitas Negeri Yogyakarta.</p>
                                    <p>Endrati Jati Siwi, adalah seorang English Reasearch and Development's Project Manager PT Yureka Edukasi Cipta sejak tahun 2014 hingga sekarang yang bertugas mengelola tim dalam pengembagan produk kelas pelatihan Bahasa Inggris serta mengajar di kelas-kelas Bahasa Inggris online sebagai tenaga pengajar senior. Berpengalaman mengajar sebagai tutor bahasa Inggris di Swift English School (2018-2019), Staff pengajar Bahasa Inggris di Yayasan Bambini Pelita Bangsa (2015-2017), serta Trainer Bahasa Inggris di Kscholl Gongsin (2014). Memiliki latar belakang pendidikan S1-Pendidikan Bahasa Inggris Universitas Sanata Dharma.</p>
                                    <p>Zidnie Ilma, adalah seorang English Research and Development PT Yureka Edukasi Cipta sejak tahun 2021 yang bertugas melakukan riset dan pengembangan produk kelas pelatihan Bahasa Inggris serta mengajar di kelas-kelas Bahasa Inggris Online sebagai tenaga pengajar senior. Berpengalaman mengajar sebagai guru spesialis Bahasa Inggris di English First (2018-2021) dan sebagai instruktur Bahasa Inggris di Jogja English Course and Community (2016-2018). Memiliki latar belakang pendidikan S1-Sastra Inggris Universitas Negeri Yogyakarta.</p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="Ulasan" name="second">
                                <div class="content">
                                    <h2>Ulasan Anda</h2>
                                    <el-rate size="large" v-model="value1" />
                                    <el-input style="margin-top: 20px;"
                                        v-model="textarea"
                                        :rows="6"
                                        type="textarea"
                                        placeholder="Berikan Ulasan Anda"
                                    />
                                    <el-button style="border-radius: 999; margin-top: 20px; padding: 0px; background-color: #f05326; color: #ffffff;">Submit</el-button>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>    
            <div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="24" :md={span:8}>
                <div class="boxContent">
                     <el-progress class="content" :percentage="progressPercentage" />
                     <el-tabs v-model="activeName2" class="demo-tabs" @tab-click="handleClick">
                        <el-tab-pane label="Aktivitas" name="pertama">
                            <el-scrollbar height="200px">
                                <div class="demo-collapse">
                                    <el-collapse accordion>
                                        <el-collapse-item name="1">
                                            <template #title>
                                                <h4 class="activityTitle">EPM 1</h4>
                                            </template>
                                            <hr>
                                            <div @click="openActivity(0)" class="activityContent">
                                                <div class="detail">
                                                    <div class="checkIcon noDisplay" style="width: 20px;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="15"><path fill="#67C23A" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path></svg>
                                                    </div>
                                                    <div>
                                                        <div style="display: flex; flex-direction: row; ">
                                                            <h4 style="width: 20px; margin: 0;">1.</h4>
                                                            <h4 style="margin: 0;">Materi 1</h4>
                                                        </div>
                                                        <div class="detail">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">Menonton video</p>
                                                            </div>
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"></path>
                                                                    <path fill="#909399" d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">00:02:02</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                        </el-collapse-item>
                                        <el-collapse-item name="2">
                                            <template #title>
                                                <h4 class="activityTitle">EPM 2</h4>
                                            </template>
                                            <hr>
                                            <div @click="openActivity(1)" class="activityContent">
                                                <div class="detail">
                                                    <div class="checkIcon noDisplay" style="width: 20px;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="15"><path fill="#67C23A" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path></svg>
                                                    </div>
                                                    <div>
                                                        <div style="display: flex; flex-direction: row; ">
                                                            <h4 style="width: 20px; margin: 0;">1.</h4>
                                                            <h4 style="margin: 0;">Materi 1</h4>
                                                        </div>
                                                        <div class="detail">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">Menonton video</p>
                                                            </div>
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"></path>
                                                                    <path fill="#909399" d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">00:02:02</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                        </el-collapse-item>
                                        <el-collapse-item name="3">
                                            <template #title>
                                                <h4 class="activityTitle">Uji Keterampilan</h4>
                                            </template>
                                            <hr>
                                            <div @click="openActivity(2)" class="activityContent">
                                                <div class="detail">
                                                    <div class="checkIcon noDisplay" style="width: 20px;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="15"><path fill="#67C23A" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path></svg>
                                                    </div>
                                                    <div>
                                                        <div style="display: flex; flex-direction: row; ">
                                                            <h4 style="width: 20px; margin: 0;">1.</h4>
                                                            <h4 style="margin: 0;">Materi 1</h4>
                                                        </div>
                                                        <div class="detail">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">Menonton video</p>
                                                            </div>
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"></path>
                                                                    <path fill="#909399" d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">00:02:02</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                        </el-collapse-item>
                                        <el-collapse-item name="4">
                                            <template #title>
                                                <h4 class="activityTitle">Evaluasi</h4>
                                            </template>
                                            <hr>
                                            <div @click="openActivity(3)" class="activityContent">
                                                <div class="detail">
                                                    <div class="checkIcon noDisplay" style="width: 20px;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="15"><path fill="#67C23A" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path></svg>
                                                    </div>
                                                    <div>
                                                        <div style="display: flex; flex-direction: row; ">
                                                            <h4 style="width: 20px; margin: 0;">1.</h4>
                                                            <h4 style="margin: 0;">Materi 1</h4>
                                                        </div>
                                                        <div class="detail">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">Menonton video</p>
                                                            </div>
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                                                                    <path fill="#909399" d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"></path>
                                                                    <path fill="#909399" d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32"></path>
                                                                    <path fill="#909399" d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z"></path>
                                                                </svg>
                                                                <p style="margin: 0 5px; color: #909399;">00:02:02</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                        </el-collapse-item>
                                    </el-collapse>
                                </div>
                            </el-scrollbar>
                        </el-tab-pane>
                        <el-tab-pane label="Sertifikat" name="kedua" style="display: flex;justify-content: center;">
                            <el-button id="buttonNotActive" style="border-radius: 999; width: 80%; margin-top: 20px; padding: 0px; color: #ffffff;" disabled >Sertifikat Kompetensi</el-button>
                        </el-tab-pane>
                    </el-tabs>
                </div>   
            <div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
    </div>
  </template>
  <style>
    @import '../css/DetailClass.css';
  </style>
  <script lang="ts">
    import { ref } from 'vue'
    import type { TabsPaneContext } from 'element-plus'

    export default {
    setup() {
        const value1 = ref(null)
        const value2 = ref(null)
        const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
        const activeName = ref('first')
        const activeName2 = ref('pertama')
        const textarea = ref('')
        const transitionActive = ref(0)
        const progressPercentage = ref(0)
        
        function openContent() {
            const bodyDeskripsi = document.getElementById('deskripsiKelas')
            const boxDeskripsi = document.getElementsByClassName('boxContent')[0]
            const iframeToRemove = document.getElementsByTagName("iframe")[0];
            if (iframeToRemove) {
                boxDeskripsi.removeChild(iframeToRemove);
            }
            bodyDeskripsi?.setAttribute('class', 'boxContent noDisplay')

            const iframeElement = document.createElement('iframe');
            iframeElement.setAttribute('width', '100%');
            iframeElement.setAttribute('style', 'height: 30vw');
            iframeElement.setAttribute('src', 'https://www.youtube-nocookie.com/embed/RunuGmKxwCU?si=s98ejPYSgT4dIe6d');
            iframeElement.setAttribute('title', 'YouTube video player');
            iframeElement.setAttribute('frameborder', '0');
            iframeElement.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframeElement.setAttribute('allowfullscreen', '');

            boxDeskripsi.appendChild(iframeElement);
        }

        function openActivity(index: number) {
            const detail = document.getElementsByClassName('checkIcon')[index];
            const jumlahPenggunaClass = document.getElementsByClassName("checkIcon").length;
            if (index == 0) {
                detail.setAttribute('class', "checkIcon");
                progressPercentage.value = 100/jumlahPenggunaClass;
                openContent();
            } else {
                const isiKelas = document.getElementsByClassName("checkIcon")[index-1].getAttribute("class");
                if (isiKelas == "checkIcon") {
                    detail.setAttribute('class', "checkIcon");
                    if(index == jumlahPenggunaClass - 1) {
                        progressPercentage.value = 100;
                        const button = document.getElementById('buttonNotActive');

                        button?.removeAttribute("disabled")
                        button?.setAttribute('id', 'buttonActive')
                    } else {
                        progressPercentage.value = 100/jumlahPenggunaClass*(index+1);
                    }
                    openContent();
                }
            }
        }
        const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
        }

        return {
        activeName,
        colors,
        value1,
        value2,
        activeName2,
        textarea,
        progressPercentage,
        openActivity,
        handleClick,
        transitionActive
        }
    }
    }
  </script>

  