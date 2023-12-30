<template>
  <div class="class-prakerja">
    <div
      class="image-prakerja"
      style="
        background-color: #fff;
        margin-top: 50px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
      "
    >
      <img
        width="80%"
        style="margin-top: 50px"
        src="../assets/bannerAbout.png"
        alt="prakerja"
      />
      <div class="text-prakerja">
        <h2>Siap Kerja Dengan Kartu Prakerja</h2>
        <p>
          PT Yureka Edukasi Cipta yang memiliki nama brand YEC CO ID berdiri
          pada tahun 2010 dengan nama awal Eureka Tour, sebuah layanan jasa tour
          spesialis Kampung Inggris. Saat ini YEC fokus membantu setiap peserta
          menjadi individu lebih baik. Tidak hanya sebatas menjadi jasa tour,
          namun juga menjadi konsultan pendidikan dan media yang membantu
          menjadikan diri lebih baik dengan kemudahan akses informasi dan
          program pelatihan terkait tes TOEFL, IELTS, Persiapan Kerja dan
          Pembelajaran Bahasa Inggris Sehari-hari.
        </p>
        <p style="margin-top: 20px">
          Serta pada tahun 2020, YEC CO ID bergabung bersama program Kartu
          Prakerja, memberikan pelatihan kepada peserta kartu prakerja yang
          memiliki keinginan untuk mengembangkan keahlian agar lebih percaya
          diri terjun ke dunia kerja, maupun membuat usaha.
        </p>
      </div>
      <div class="content-prakerja" ref="contentPrakerja">
        <el-row>
          <el-col :span="24" :md="12">
            <el-affix class="affix" offset="30">
              <el-card>
                <router-link
                  to="/class-prakerja/#programKartuPrakerja"
                  class="program-prakerja"
                >
                  <div class="clearfix">
                    <span>A. Program Kartu Prakerja</span>
                  </div>
                </router-link>
                <router-link
                  to="/class-prakerja/#programKartuPrakerja"
                  class="program-prakerja"
                >
                  <div class="clearfix">
                    <span>B. Persyaratan Pendaftaran Kartu Prakerja</span>
                  </div>
                </router-link>
                <router-link
                  to="/class-prakerja/#programKartuPrakerja"
                  class="program-prakerja"
                >
                  <div class="clearfix">
                    <span>C. Langkah Pendaftaran Kartu Prakerja</span>
                  </div>
                </router-link>
                <router-link
                  to="/class-prakerja/#programKartuPrakerja"
                  class="program-prakerja"
                >
                  <div class="clearfix">
                    <span
                      >D. Cara Tukar Kode Redeem dan Kode Voucher Kelas
                      Prakerja</span
                    >
                  </div>
                </router-link>
                <router-link
                  to="/class-prakerja/#programKartuPrakerja"
                  class="program-prakerja"
                >
                  <div class="clearfix">
                    <span>E. Cara Pembelian Pelatihan</span>
                  </div>
                </router-link>
                <router-link
                  to="/class-prakerja/#programKartuPrakerja"
                  class="program-prakerja"
                >
                  <div class="clearfix">
                    <span
                      >F.Mengapa Harus Memilih Kelas Pelatihan di YEC.CO.ID
                      ?</span
                    >
                  </div>
                </router-link>
                <router-link
                  to="/class-prakerja/#programKartuPrakerja"
                  class="program-prakerja"
                >
                  <div class="clearfix">
                    <span>G. Kelas-kelas Yang Dirancang oleh YEC.CO.ID</span>
                  </div>
                </router-link>
              </el-card>
            </el-affix>
          </el-col>
          <el-col :span="24" :md="12" class="programKartuPrakerjaContent">
            <h3 class="is-bold" id="programKartuPrakerja">
              A. Program Kartu Prakerja
            </h3>
            <p>
              Program Kartu Prakerja adalah program pengembangan kompetensi
              kerja dan kewirausahaan yang ditujukan untuk pencari kerja,
              pekerja/buruh yang terkena pemutusan hubungan kerja, dan/atau
              pekerja/buruh yang membutuhkan peningkatan kompetensi, termasuk
              pelaku usaha mikro dan kecil. Kami percaya bahwa masyarakat
              Indonesia sesungguhnya ingin selalu meningkatkan kemampuannya.
              Program ini didesain sebagai sebuah produk dan dikemas sedemikian
              rupa agar memberikan nilai bagi pengguna sekaligus memberikan
              nilai bagi sektor swasta.
            </p>
            <p>
              Jalan digital melalui marketplace dipilih untuk memudahkan
              pengguna mencari, membandingkan, memilih dan memberi evaluasi.
              Hanya dengan cara ini, produk bisa terus diperbaiki, tumbuh dan
              relevan. Menggandeng pelaku usaha swasta, program ini adalah wujud
              kerjasama pemerintah dan swasta dalam melayani masyarakat dengan
              semangat gotong royong demi SDM unggul, Indonesia maju.
            </p>
            <h3 class="is-bold" id="programKartuPrakerja">
              B. Persyaratan Pendaftaran Kartu Prakerja
            </h3>
            <ul>
              <li>
                Warga Negara Indonesia (WNI) yang berusia minimal 18 tahun
              </li>
              <li>
                Pencari kerja, pekerja/buruh yang terkena pemutusan hubungan
                kerja, dan/atau pekerja/buruh yang membutuhkan peningkatan
                kompetensi, termasuk pelaku usaha mikro dan kecil.
              </li>
              <li>Memiliki Nomor Induk Kependudukan (NIK)</li>
              <li>Memiliki Kartu Keluarga (KK)</li>
              <li>Memiliki Smartphone dan/atau Laptop</li>
              <li>Memiliki Email</li>
              <li>
                Memiliki Rekening Bank (BCA, BNI, BRI, Mandiri, BTN, BNI
                Syariah, BRI Syariah, dan Mandiri Syariah)
              </li>
            </ul>
            <h3 class="is-bold" id="programKartuPrakerja">
              C. Langkah Pendaftaran Kartu Prakerja
            </h3>
            <h4 class="is-bold">1. Daftar</h4>
            <p>
              Buat akun Prakerja dengan data diri kamu. Siapkan e-mail, NIK,
              nomor KK, nomor HP yang masih aktif dan selesaikan tes kemampuan
              dasar untuk menyelesaikan proses pendaftaran.
            </p>
            <h4>2, Gabung Gelombang</h4>
            <p>
              Ikut Seleksi dengan gabung gelombang. Tunggu pengumuman hasil
              seleksinya.
            </p>
            <h4>3. Pilih Pelatihan</h4>
            <p>
              Gunakan saldo pelatihan sebesar Rp 3,5 juta, pilih yang kamu
              butuhkan di Mitra Platform Digital dan bayar dengan nomor Kartu
              Prakerjamu. Pastikan rekening bank/e-wallet kamu sudah tersambung
              sebelum membeli pelatihan.
            </p>
            <h4>4. Ikuti Pelatihan</h4>
            <p>
              Kerjakan pre-test, post-test dan unjuk keterampilan. Selesaikan
              pelatihan dan dapatkan sertifikat.
            </p>
            <h4>5. Beri Rating dan Ulasan</h4>
            <p>
              Berikan rating dan ulasan terhadap pelatihan yang telah kamu
              selesaikan di dashboard Prakerjamu.
            </p>
            <h4>6. Dapatkan Insentif</h4>
            <p>
              Tunggu beberapa hari, kamu akan menerima insentif Rp.600.000 di
              rekening bank/e-walletmu.
            </p>
            <h4>7. Isi Survey evaluasi</h4>
            <p>
              Jawab 2 survei evaluasi di dashboard Prakerjamu dan dapatkan
              insentif Rp.50.000 untuk setiap survei
            </p>
            <h3 class="is-bold" id="programKartuPrakerja">
              D. Cara Tukar Kode Redeem dan Kode Voucher Kelas Prakerja
            </h3>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem1.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem2.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem3.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem4.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem5.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem6.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem7.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem8.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem9.png"
              alt="prakerja"
            />
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/kodeRedeem10.png"
              alt="prakerja"
            />
            <h3 class="is-bold" id="programKartuPrakerja">
              E. Cara Pembelian Pelatihan
            </h3>
            <p>
              Kamu bisa pilih berbagai pelatihan dari YEC.CO.ID melalui digital
              platform berikut:
            </p>
            <h4>1. Karier.mu</h4>
            <img
              width="20%"
              style="margin-top: 10px"
              src="../assets/pelatihan1.png"
              alt="prakerja"
            />
            <h4>2. Tokopedia</h4>
            <img
              width="20%"
              style="margin-top: 10px"
              src="../assets/pelatihan2.png"
              alt="prakerja"
            />
            <h4>3. Pintar</h4>
            <img
              width="20%"
              style="margin-top: 10px"
              src="../assets/pelatihan3.png"
              alt="prakerja"
            />
            <h4>4. Pijar Mahir</h4>
            <img
              width="20%"
              style="margin-top: 10px"
              src="../assets/pelatihan4.png"
              alt="prakerja"
            />
            <h4>5. Bukalapak</h4>
            <img
              width="20%"
              style="margin-top: 10px"
              src="../assets/pelatihan5.png"
              alt="prakerja"
            />
            <h3 class="is-bold" id="programKartuPrakerja">
              F. Mengapa Harus Memilih Kelas Pelatihan di YEC.CO.ID ?
            </h3>
            <el-row>
              <el-col :span="24" :md="12">
                <el-card>
                  <div class="clearfix">
                    <span>1. Kelas Pelatihan yang Terpercaya</span>
                  </div>
                  <p>
                    YEC.CO.ID telah berpengalaman dalam memberikan pelatihan
                    bahasa Inggris dan pengembangan diri lainnya sejak tahun
                    2010. Kami telah memiliki lebih dari 100.000 alumni yang
                    tersebar di seluruh Indonesia.
                  </p>
                </el-card>
              </el-col>
              <el-col :span="24" :md="12">
                <el-card>
                  <div class="clearfix">
                    <span>2. Kelas Pelatihan yang Berkualitas</span>
                  </div>
                  <p>
                    YEC.CO.ID telah berpengalaman dalam memberikan pelatihan
                    bahasa Inggris dan pengembangan diri lainnya sejak tahun
                    2010. Kami telah memiliki lebih dari 100.000 alumni yang
                    tersebar di seluruh Indonesia.
                  </p>
                </el-card>
              </el-col>
              <el-col :span="24" :md="12">
                <el-card>
                  <div class="clearfix">
                    <span>3. Kelas Pelatihan yang Terjangkau</span>
                  </div>
                  <p>
                    YEC.CO.ID telah berpengalaman dalam memberikan pelatihan
                    bahasa Inggris dan pengembangan diri lainnya sejak tahun
                    2010. Kami telah memiliki lebih dari 100.000 alumni yang
                    tersebar di seluruh Indonesia.
                  </p>
                </el-card>
              </el-col>
              <el-col :span="24" :md="12">
                <el-card>
                  <div class="clearfix">
                    <span>4. Kelas Pelatihan yang Mudah Diakses</span>
                  </div>
                  <p>
                    YEC.CO.ID telah berpengalaman dalam memberikan pelatihan
                    bahasa Inggris dan pengembangan diri lainnya sejak tahun
                    2010. Kami telah memiliki lebih dari 100.000 alumni yang
                    tersebar di seluruh Indonesia.
                  </p>
                </el-card>
              </el-col>
            </el-row>
            <h3 class="is-bold" id="programKartuPrakerja">
              G. Kelas-kelas Yang Dirancang oleh YEC.CO.ID
            </h3>
            <h4>1. Menggunakan Bahasa Inggris Bagi Calon Sekretaris</h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec1.png"
              alt="prakerja"
            />
            <p>
              <strong>Menggunakan Bahasa Inggris Bagi Calon Sekretaris </strong
              >adalah kelas yang disusun khusus untuk peserta yang ingin belajar
              Bahasa Inggris khususnya bagi yang berprofesi sebagai Sekretaris.
              Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk
              pada SKKNI Nomor 27 Tahun 2009.
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi seorang calon sekretaris meliputi perkenalan okupasi sekretaris, cakupan tugas, dan pentingnya belajar Bahasa Inggris bagi sekretaris, orang-orang di tempat kerja (people at work), membuat dan menerima panggilan (making and receiving calls), menerima dan memberi pesan (taking and giving messages), menyambut dan menerima tamu (welcoming and receiving visitors), dan membuat surat, memo, dan permohonan (letters, inter-office memos, and requests) mengingat banyaknya perusahaan multinasional yang terdapat di Indonesia serta pentingnya penguasaan Bahasa Inggris sebagai bahasa internasional.
            </p>
            <h4>
              2. Menggunakan Bahasa Inggris Bagi Calon Tenaga Perkantoran Umum
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec2.png"
              alt="prakerja"
            />
            <p>
              Menggunakan Bahasa Inggris Bagi Calon Tenaga Perkantoran Umum adalah kelas yang disusun untuk peserta yang ingin belajar Bahasa Inggris khususnya bagi yang berprofesi sebagai tenaga perkantoran umum. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 183 Tahun 2016 Administrasi Profesional.
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi seorang calon tenaga perkantoran umum meliputi perkenalan okupasi tenaga perkantoran umum, cakupan tugas, dan pentingnya belajar Bahasa Inggris bagi calon tenaga perkantoran umum, bertemu kolega/pelanggan (small talks/basic conversation), membuat-menerima panggilan dan memberikan pesan secara lisan (making-receiving calls and taking a message), meminta dan memberikan saran/usul (asking and giving opinions) meminta dan memberikan klarifikasi (asking for clarification and clarifying one's idea), surat dan pengumuman (letters and announcement) mengingat banyaknya perusahaan multinasional yang terdapat di Indonesia serta pentingnya penguasaan Bahasa Inggris sebagai bahasa internasional.
            </p>
            <h4>
              3. Melakukan Komunikasi Bahasa Inggris Melalui Panggilan Telepon Bagi Calon Petugas Informasi Pusat Kontak
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec3.png"
              alt="prakerja"
            />
            <p>
              Melakukan Komunikasi Bahasa Inggris Melalui Panggilan Telepon Bagi Calon Petugas Informasi Pusat Kontak adalah kelas yang disusun khusus untuk peserta yang ingin belajar Bahasa Inggris khususnya bagi yang berprofesi sebagai Petugas Informasi Pusat Kontak. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 27 Tahun 2009 Tentang Bahasa Inggris Tenaga Administrasi Profesional.
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi seorang calon Petugas Informasi Pusat Kontak meliputi perkenalan okupasi Petugas Informasi Pusat Kontak, cakupan tugas, dan pentingnya belajar Bahasa Inggris bagi Petugas Informasi Pusat Kontak, menggunakan bahasa Inggris untuk melayani pelanggan atau konsumen, menggunakan bahasa Inggris untuk menjawab telepon dalam melayani pelanggan atau konsumen, menginterpretasikan informasi yang diterima dan memiliki kemampuan komunikasi yang efektif, menunjukkan sikap komunikatif dalam berbahasa Inggris, menunjukkan sikap terampil dalam penggunaan peralatan komunikasi mengingat banyaknya perusahaan multinasional yang terdapat di Indonesia serta pentingnya penguasaan Bahasa Inggris sebagai bahasa internasional.
            </p>
            <h4>
              4. Melakukan Riset Kata Kunci Dan Optimasi SEO Website Untuk Menjadi Manajer Pemasaran
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec4.png"
              alt="prakerja"
            />
            <p>
              Melakukan Riset Kata Kunci dan Optimasi SEO Website Untuk Menjadi Manajer Pemasaran adalah kelas yang dikhususkan untuk peserta yang ingin belajar riset kata kunci dan optimasi SEO website. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 389 Tahun 2013 Tentang Penetapan Standar Kompetensi Kerja Nasional Indonesia Kategori Jasa Profesional, Ilmiah Dan Teknis, Golongan Pokok Kegiatan Kantor Pusat Dan Konsultasi Manajemen, Golongan Konsultasi Manajemen, Sub Golongan Konsultasi Manajemen Area Kerja Pemasaran.
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang riset kata kunci dan optimasi SEO website untuk menjadi manajer pemasaran, cakupan tugas, okupasi manajer pemasaran dan pentingnya riset kata kunci dan optimasi SEO Website, pengenalan SEO dalam Digital Marketing, membangun website, menulis konten, teknik SEO on page dan offpage, dan audit SEO.
            </p>
            <h4>
              5. Menyusun Surat Perjanjian Bahasa Inggris Bagi Calon Staf Legal
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec5.png"
              alt="prakerja"
            />
            <p>
              Menyusun Surat Perjanjian Bahasa Inggris bagi Calon Staf Legal adalah kelas yang disusun untuk peserta yang ingin belajar Bahasa Inggris khususnya bagi yang berprofesi sebagai Staf Legal. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 183 Tahun 2016 tentang Tenaga Administrasi Profesional dan SKKNI Nomor 27 Tahun 2009 tentang Bahasa Inggris Tenaga Administrasi Profesional.
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi calon staf legal meliputi penggunaan kosa kata Bahasa Inggris yang terdapat pada surat perjanjian kerjasama dalam Bahasa Inggris, penggunaan istilah yang terdapat dalam surat perjanjian kerjasama berbahasa Inggris, penggunaan grammar (Simple present, Simple Future, dan Passive Voices) bahasa Inggris sederhana yang terdapat pada surat perjanjian kerjasama berbahasa Inggris, penggunaan kosakata dan grammar bahasa Inggris sederhana untuk menyusun surat perjanjian kerja sama dalam bahasa Inggris, dan penggunaan sikap komunikatif (pemberian saran/masukan/pendapat) mengenai isi surat perjanjian kerjasama dengan menggunakan bahasa Inggris.
            </p>
            <h4>
              6. Mengolah Data Penjualan Dengan Microsoft Excel Untuk Menjadi Admin Input Data
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec6.png"
              alt="prakerja"
            />
            <p>
              Mengolah Data Penjualan dengan Microsoft Excel untuk Menjadi Admin Input Data adalah kelas yang disusun khusus untuk peserta yang ingin belajar Data Entry khususnya bagi yang berprofesi sebagai Admin Input Data. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 56 Tahun 2018.
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang menggunakan Microsoft Excel untuk Menjadi Admin Input Data meliputi Pengenalan Microsoft Excel dan Formula Dasar Microsoft Excel: Formula Dasar, Formula Dasar Microsoft Excel: Formula Lanjutan, Mengatur dan Merapikan Data Penjualan, Mengolah Data Penjualan Menggunakan Seri Formula IF, Mengolah Data Penjualan Menggunakan Formula Look Up dan Pivot Table.
            </p>
            <h4>
              7. Menyusun Laporan Keuangan Dengan Microsoft Excel Untuk Menjadi Staf Akuntan
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec7.png"
              alt="prakerja"
            />
            <p>
              Menyusun Laporan Keuangan dengan Microsoft Excel untuk Menjadi Staf Akuntan adalah kelas yang disusun untuk peserta yang ingin belajar menyusun laporan keuangan menggunakan microsoft excel khususnya bagi yang berprofesi sebagai Staf Akuntan. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 182 Tahun 2013.
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang menggunakan microsoft excel untuk menjadi staf akuntan meliputi pengenalan okupasi beserta cakupan tugas staf akuntansi dan pengenalan siklus akuntansi, logika akuntansi dan siklus akuntansi (jurnal umum dan jurnal khusus), siklus akuntansi (berupa neraca saldo, neraca lajur, ayat jurnal penyesuaian dan neraca saldo setelah penyesuaian, membuat sistem akuntansi menggunakan microsoft excel dan menyusun laporan keuangan (memproses data dan menyajikan laporan keuangan).
            </p>
            <h4>
              8. Mengelola Gaji Karyawan Dengan Microsoft Excel Untuk Menjadi Staf Personalia
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec8.png"
              alt="prakerja"
            />
            <p>
              Mengelola Gaji Karyawan dengan Microsoft Excel Untuk Menjadi Staf Personalia adalah kelas yang disusun untuk peserta yang ingin belajar tentang mengelola gaji karyawan khususnya bagi yang berprofesi sebagai Staff Personalia. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 149 Tahun 2020 Tentang Manajemen Sumber Daya Manusia
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang Pengenalan Dasar-Dasar Kompensasi dan Benefit, Struktur Jabatan dan Skala Upah Karyawan, Menghitung Komponen Penambah Gaji, Menghitung Komponen Pengurang Gaji, Laporan Gaji Karyawan.
            </p>
            <h4>
              9. Menyusun Surat Bisnis Dalam Bahasa Inggris Bagi Calon Sekretaris
            </h4>
            <img
              width="100%"
              style="margin-top: 10px"
              src="../assets/yec9.png"
              alt="prakerja"
            />
            <p>
              Menyusun Surat Bisnis dalam Bahasa Inggris Bagi Calon Sekretaris adalah kelas yang disusun untuk peserta yang ingin belajar tentang menyusun surat bisnis khususnya bagi yang berprofesi sebagai sekretaris. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 27 Tahun 2009 Bahasa Inggris untuk Tenaga Administrasi Profesional
            </p>
            <p>
              Peserta akan mendapatkan pengetahuan tentang Surat Bisnis dalam Bahasa Inggris dan Penyusunannya, Penyusunan Surat Bisnis “letter of inquiry” dan “letter of order” dalam Bahasa Inggris, Penyusunan surat bisnis “letter of request” dan “letter of reservation” dalam Bahasa Inggris, Penyusunan surat bisnis “letter of confirmation” dan “letter of reminder” dalam Bahasa Inggris, Penyusunan surat bisnis “adjustment/apology” dalam Bahasa Inggris.
            </p>
            <h3 class="is-bold" id="programKartuPrakerja">FAQ</h3>
            <div class="demo-collapse" style="margin-bottom: 20px">
              <el-collapse accordion>
                <el-collapse-item name="1">
                  <template #title>
                    Consistency<el-icon class="header-icon">
                      <info-filled />
                    </el-icon>
                  </template>
                  <div>
                    Consistent with real life: in line with the process and
                    logic of real life, and comply with languages and habits
                    that the users are used to;
                  </div>
                  <div>
                    Consistent within interface: all elements should be
                    consistent, such as: design style, icons and texts, position
                    of elements, etc.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Feedback" name="2">
                  <div>
                    Operation feedback: enable the users to clearly perceive
                    their operations by style updates and interactive effects;
                  </div>
                  <div>
                    Visual feedback: reflect current state by updating or
                    rearranging elements of the page.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Efficiency" name="3">
                  <div>
                    Simplify the process: keep operating process simple and
                    intuitive;
                  </div>
                  <div>
                    Definite and clear: enunciate your intentions clearly so
                    that the users can quickly understand and make decisions;
                  </div>
                  <div>
                    Easy to identify: the interface should be straightforward,
                    which helps the users to identify and frees them from
                    memorizing and recalling.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Controllability" name="4">
                  <div>
                    Decision making: giving advices about operations is
                    acceptable, but do not make decisions for the users;
                  </div>
                  <div>
                    Controlled consequences: users should be granted the freedom
                    to operate, including canceling, aborting or terminating
                    current operation.
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassPrakerja",
};
</script>

<style>
.programKartuPrakerjaContent {
  text-align: left;
  justify-content: start;
  margin-top: 30px;
  padding-left: 20px;
}

.image-prakerja {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content-prakerja {
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  width: 80%;
}

.program-prakerja {
  text-decoration: none;
  width: 90%;
  height: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: left;
  padding: 20px;
}

.program-prakerja:hover {
  background-color: #f5f5f5;
}

.text-prakerja {
  width: 80%;
  text-align: left;
}

@media screen and (max-width: 768px) {

  .program-prakerja {
    width: 100%;
  }
  .image-prakerja {
    width: 100%;
  }
  .affix {
    display: none;
  }
}
</style>
