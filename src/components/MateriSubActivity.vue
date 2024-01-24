<template>
  <div class="boxContent">
    <!-- <h2>{{ param }}</h2> -->
    <div v-for="activityDetail in activity" :key="activityDetail.id" class="content">
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
        <h1>Menonton Video</h1>
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
            <el-button
              class="button-download-tugas"
              type="submit"
              @click="downloadebook"
            >
              <i class="bx bxs-file-pdf"></i> Download Ebook
            </el-button>
          </div>
          <div class="baca-ebook">
            <iframe
              width="100%"
              height="800px"
              title="pdf"
              :src="`${getFilePath}`"
            ></iframe>
          </div>
        </div>
        <div
          v-if="
            subActivityItem.subActvityType == 'Mengerjakan Tugas' &&
            subActivityItem.subActivityId == param
          "
        >
          <h1>Mengerjakan Tugas</h1>
          <div v-if="param % 2 == 0">
            <div v-if="!subActivityItem.progress[0]">
              <h3>Jawab soal tersebut</h3>
              <el-radio-group v-model="radio">
                <el-radio :label="1">Option A</el-radio>
                <el-radio :label="2">Option B</el-radio>
                <el-radio :label="3">Option C</el-radio>
              </el-radio-group>
              <el-row class="mb-4">
                <el-button type="primary" @click="submitJawaban" round
                  >Submit</el-button
                >
              </el-row>
            </div>
          </div>
          <div v-if="param % 2 != 0" class="mengerjakan-tugas">
            <div class="download-tugas">
              <p>
                Download tugas kamu disini! <br />
                <span style="font-size: 12px; color: #f05326; cursor: pointer;" @click="downloadtugas"
                  >*klik tombol download untuk mendownload tugas</span
                >
              </p>
            </div>
            <div class="upload">
            <h4 v-if="!subActivityItem.progress[0]">
              Upload tugas kamu disini!
            </h4>
              <el-col :sm="24" :lg="24" v-if="subActivityItem.progress[0]">
                <el-result
                  icon="success"
                  title="Success You have finished the Submission"
                  sub-title="Please follow the instructions"
                >
                </el-result>
              </el-col>
            <input
              v-if="!subActivityItem.progress[0]"
              type="file"
              @change="uploadFile"
            />
            <!-- <el-upload
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
            </el-upload> -->
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="1" style="display: none">
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
      <hr />
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["param"],

  data() {
    return {
      radio: null,
      id: this.$route.params.id,
      file_name: null,
      activity: {},
    };
  },

  methods: {
    downloadebook() {
      window.open(
        "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"
      );
    },

    downloadtugas() {
      window.open(
        "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"
      );
    },

    async uploadFile(e) {
      console.log(e.target.files[0]);
      await axios.post(
        `http://127.0.0.1:8000/api/user/sub_activity/${this.param}`,
        {
          file: e.target.files[0],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    async submitJawaban() {
      await axios.post(
        `http://127.0.0.1:8000/api/user/sub_activity/${this.param}`,
        {
          answer: this.radio,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
    },
  },
};
</script>

<style>
  .boxContent {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    align-content: center;
    justify-content: center;
    align-items: center ;
  } 

  .upload {
    padding: 10px;
    border-radius: 20px;
  }
.boxContent h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;  
 text-align: center;
}

.mengerjakan-tugas {
  margin-top: 20px;
}

.download-ebook {
  display: flex;
  justify-content: center;
  align-items: center;
}


.button-download-tugas {
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
</style>
