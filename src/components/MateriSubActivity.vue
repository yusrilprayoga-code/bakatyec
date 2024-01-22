<template>
  <div class="boxContent">
    <!-- <h2>{{ param }}</h2> -->
    <div v-for="activityDetail in activity" :key="activityDetail.id">
      <div
        v-for="subActivityItem in activityDetail.activityDetails"
        :key="subActivityItem.subActivityId"
      >
        <div
          v-if="
            subActivityItem.subActvityType == 'Menonton Video' &&
            subActivityItem.subActivityId == param
          "
        >
          <iframe
            width="100%"
            style="height: 30vw"
            src="https://www.youtube.com/embed/RunuGmKxwCU?si=UoTb7sFXGWFxLmNl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div
          v-if="
            subActivityItem.subActvityType == 'Membaca E-Book' &&
            subActivityItem.subActivityId == param
          "
        >
          <h1>Membaca Ebook</h1>
          <div class="download-ebook">
            <el-button class="button-download-tugas" type="submit" @click="downloadebook" >
              <i class='bx bxs-file-pdf'></i> Download Ebook
            </el-button>
          </div>
          <div class="baca-ebook">
            <iframe width="100%" height="800px" title="pdf" :src="`${getFilePath}`" ></iframe>              
          </div>
        </div>
        <div
          v-if="
            subActivityItem.subActvityType == 'Mengerjakan Tugas' &&
            subActivityItem.subActivityId == param
          "
        >
          <h1>Mengerjakan Tugas</h1>
          <div class="mengerjakan-tugas">
            <div class="download-tugas">
              <el-button class="button-download-tugas" type="submit" @click="downloadtugas" >
                <i class='bx bxs-file-pdf'></i> Download Tugas
              </el-button>
            </div>
            <h4>
              Upload tugas kamu disini!
            </h4>
            <el-upload
              class="upload-demo"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
            >
              <el-icon class="el-icon--upload">
               <i class='bx bxs-cloud-upload'></i>
              </el-icon>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  Allowed file types: pdf. Max file size: 500kb.
                </div>
              </template>
            </el-upload>
          </div>
        </div>
        <!-- <h2 v-if="subActivityItem.subActivityId == param" >{{ subActivityItem.subActvityType }}</h2> -->
      </div>
    </div>
    <div id="1" style="display: none; ">
      <img src="../assets/1.png" width="100%" height="auto" alt="" />
    </div>
    <div id="2" style="display: none">
      <iframe
        width="100%"
        style="height: 30vw"
        src="https://www.youtube.com/embed/RunuGmKxwCU?si=UoTb7sFXGWFxLmNl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <hr>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["param"],

  data() {
    return {
      id: this.$route.params.id,
      activity: {},
    };
  },

  methods: {
    downloadebook() {
      window.open("https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf");
    },

    downloadtugas() {
      window.open("https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf");
    },

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

        this.activity = response.data.class.class_activity.map(
          (classActivityItem) => {
            return {
              id: classActivityItem.id,
              categoryName: classActivityItem.activity_name,
              activityDetails: classActivityItem.sub_activity.map(
                (subActivityItem) => {
                  return {
                    subActivityId: subActivityItem.id,
                    subActivityName: subActivityItem.sub_activity_name,
                    subActivityNumber: subActivityItem.sub_activity_number,
                    subActivityContent: subActivityItem.content,
                    subActvityType: subActivityItem.type.type_name,
                    progress: subActivityItem.user_progress,
                  };
                }
              ),
            };
          }
        );
        console.log(this.activity);
      } catch (error) {
        console.error("Error fetching user classes:", error);
      }
    },
  },

  mounted() {
    this.getMateri();
  },

  computed: {
    getFilePath() {
      return `https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf`;
  }}
};
</script>

<style>
.boxContent {
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.baca-ebook {
  width: 100%;
  height: 100%;
}

el-upload {
  display: block;
  margin-top: 20px;
}

.button-download-tugas {
  border: none;
  color: #000;
  margin: 25px;
}

.button-download-tugas:hover {
  background: none;
  color: #f05326;
}
</style>
