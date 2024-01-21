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
        </div>
        <div
          v-if="
            subActivityItem.subActvityType == 'Mengerjakan Tugas' &&
            subActivityItem.subActivityId == param
          "
        >
          <h1>Mengerjakan Tugas</h1>
          <div>
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
            >
              <el-button style="padding-right: 100px; padding-left: 100px;" type="primary">Click to upload</el-button>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </template>
            </el-upload>
          </div>
        </div>
        <!-- <h2 v-if="subActivityItem.subActivityId == param" >{{ subActivityItem.subActvityType }}</h2> -->
      </div>
    </div>
    <div id="1" style="display: none">
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
    // const jenis = 2;
    // // 1 merupakan id dari type mengerjakan tugas
    // // 2 merupakan id dari type menonton video
    // // 3 merupakan id dari type membaca e book

    //   const element = document.getElementById(jenis);
    //   if (element) {
    //     element.style.display = 'flex';
    //   }
  },
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

el-upload {
  display: block;
  margin-top: 20px;
}

</style>
