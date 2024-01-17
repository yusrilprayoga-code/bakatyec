<template>
    <div class="boxContent">
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
</template>

<style>
    @import '../css/DetailClass.css';
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const value1 = ref(null)
const activeName = ref('first')
const textarea = ref('')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>