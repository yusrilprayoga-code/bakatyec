<template>
  <div class="boxContent">
    <el-progress class="content" :percentage="progressPercentage" />
    <el-tabs style="padding: 10px" v-model="activeName2" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Aktivitas" name="pertama">
        <el-scrollbar height="auto">
          <div class="demo-collapse">
            <el-collapse accordion>
              <el-collapse-item v-for="activityDetail in activity" :key="activityDetail.id">
                <template #title>
                  <h4 class="activityTitle">
                    {{ activityDetail.categoryName.substring(0, 15) + "..." }}
                  </h4>
                </template>
                <hr />
                <div 
                  class="activityContent" v-for="(subActivityItem, index) in activityDetail.activityDetails"
                  :key="subActivityItem.subActivityId"
                  @click.prevent="!(subActivityItem.progress[0]) ? addProgress(subActivityItem.subActivityId) : ''">
                  <div class="detail">
                    <div class="checkIcon" v-show="(subActivityItem.progress[0])" style="width: 20px">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="15">
                        <path fill="#67C23A"
                          d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z">
                        </path>
                      </svg>
                    </div>
                    <div>
                      <div style="display: flex; flex-direction: column; cursor: pointer;">
                        <h4 style="margin: 0">
                          {{ index + 1 }}. {{ subActivityItem.subActivityName }}
                        </h4>
                        <div class="detail">
                          <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                              <path fill="#909399"
                                d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32">
                              </path>
                              <path fill="#909399"
                                d="M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z">
                              </path>
                            </svg>
                            <p style="margin: 0 5px; color: #909399">
                              {{ subActivityItem.subActvityType }}
                            </p>
                          </div>
                          <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="15" height="15">
                              <path fill="#909399"
                                d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768">
                              </path>
                              <path fill="#909399"
                                d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32">
                              </path>
                              <path fill="#909399"
                                d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z">
                              </path>
                            </svg>
                            <p style="margin: 0 5px; color: #909399">00:02:02</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="Sertifikat" name="kedua" style="display: flex; justify-content: center">
        <el-button id="buttonNotActive" style="
            border-radius: 999;
            width: 80%;
            margin-top: 20px;
            padding: 0px;
            color: #ffffff;
          " disabled>Sertifikat Kompetensi</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
@import "../css/DetailClass.css";
</style>

<script>
import { ElNotification } from 'element-plus'
import axios from "axios";

export default {
  data() {
    return {
      activeName2: "pertama",
      countOpenActivity: 0, // jumlah activity yang telah dibuka
      checkIcons: [],
      id: this.$route.params.id,
      activity: {},
      // isClicked: false

      // subActivity: [],
    };
  },

  methods: {
    openActivity(index) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const jumlahPenggunaClass = this.checkIcons.length;
      if (index === 0) {
        //detail.setAttribute('class', "checkIcon");
        // openContent();
      } else {
        const isiKelas = this.checkIcons[index - 1].getAttribute("class");
        if (isiKelas === "checkIcon") {
          //detail.setAttribute('class', "checkIcon");
          // openContent();
        }
      }
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
    addProgress(sub_activity_id) {
      axios.post(
        `http://127.0.0.1:8000/api/user/classes/${this.id}`,
        {
          answer: 'contoh',
          sub_activity_id: sub_activity_id
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      });
    },

    async getClassActivity() {
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

  computed: {
    progressPercentage() {
      return (this.countOpenActivity / this.activity.length) * 100;
    },

    // async getSubActivity() {
    //   try {
    //     const response = await axios.get(
    //       `http://127.0.0.1:8000/api/user/classes/${this.id}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       }
    //     );
    //     this.subActivity = [];

    //     response.data.class.class_activity.forEach((classActivityItem) => {
    //       classActivityItem.sub_activity.forEach((subActivityItem) => {
    //         this.subActivity.push({
    //           subActivityId: subActivityItem.activity_id,
    //           subActivityName: subActivityItem.sub_activity_name,
    //           subActivityNumber: subActivityItem.sub_activity_number,
    //           subActivityContent: subActivityItem.content,
    //         });
    //       });
    //     });

    //     console.log(this.subActivity);
    //   } catch (error) {
    //     console.error("Error fetching user classes:", error);
    //   }
    // },
  },

  mounted() {
    this.getClassActivity();
    // this.getSubActivity();
    this.checkIcons = document.getElementsByClassName("checkIcon");

    for (
      let index = 0;
      index < this.countOpenActivity && index < this.checkIcons.length;
      index++
    ) {
      if (this.checkIcons[index]) {
        this.checkIcons[index].setAttribute("class", "checkIcon");
      }
    }
  },
};

// import { ref, onMounted } from 'vue';

// const activeName2 = ref('pertama');
// const countOpenActivity = ref(2); // jumlah activity yang telah dibuka
// const checkIcons = ref([]);

// onMounted(() => {
//   checkIcons.value = document.getElementsByClassName('checkIcon');
//   for (let index = 0; index < countOpenActivity.value; index++) {
//     checkIcons.value[index].setAttribute('class', 'checkIcon');
//   }
// });

// function openActivity(index: number) {
//   const jumlahPenggunaClass = checkIcons.value.length;
//   if (index === 0) {
//     //detail.setAttribute('class', "checkIcon");
//     // openContent();
//   } else {
//     const isiKelas = checkIcons.value[index - 1].getAttribute('class');
//     if (isiKelas === 'checkIcon') {
//       //detail.setAttribute('class', "checkIcon");
//       // openContent();
//     }
//   }
//}
</script>
