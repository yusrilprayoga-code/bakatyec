<template>
  <div class="boxContent">
    <el-progress class="content" :color="customColor" :percentage="progressPercentage" />
    <el-tabs
      style="padding: 10px"
      v-model="activeName2"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Aktivitas" name="pertama">
        <el-scrollbar height="auto">
          <div class="demo-collapse">
            <el-collapse accordion>
              <el-collapse-item
                v-for="activityDetail in activity"
                :key="activityDetail.id"
              >
                <template #title>
                  <h4 class="activityTitle" @click.prevent="openContent(null)">
                    {{ activityDetail.categoryName.substring(0, 15) + "..." }}
                  </h4>
                </template>
                <hr />
                <div
                  class="activityContent"
                  v-for="(
                    subActivityItem, index
                  ) in activityDetail.activityDetails"
                  :key="subActivityItem.subActivityId"
                  :style="
                    subActivityItem.subActivityId
                      ? 'background-color: #f5f7fa'
                      : 'background-color: #fff'
                  "
                  @click.prevent="
                    !subActivityItem.progress[0]
                      ? addProgress(subActivityItem.subActivityId) &&
                        openContent(subActivityItem.subActivityId)
                      : openContent(subActivityItem.subActivityId)
                  "
                >
                  {{ countSubActivity(subActivityItem.subActivityId) }}

                  <div class="detail">
                    <div
                      class="checkIcon"
                      style="width: 20px"
                      v-if="
                        subActivityItem.progress[0] ||
                        pilih.includes(subActivityItem.subActivityId)
                      "
                    >
                      {{ countComplete(subActivityItem.subActivityId) }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        data-v-ea893728=""
                        width="15"
                      >
                        <path
                          fill="#67C23A"
                          d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          cursor: pointer;
                        "
                      >
                        <h4 style="margin: 0">
                          {{ index + 1 }}. {{ subActivityItem.subActivityName }}
                        </h4>
                        <div class="detail">
                          <div class="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                              width="15"
                              height="15"
                            >
                              <path
                                fill="#909399"
                                d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32"
                              ></path>
                              <path
                                fill="#909399"
                                d="M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z"
                              ></path>
                            </svg>
                            <p style="margin: 0 5px; color: #909399">
                              {{ subActivityItem.subActvityType }}
                            </p>
                          </div>
                          <div
                            class="icon"
                            v-if="
                              subActivityItem.subActvityType == 'Menonton Video'
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                              width="15"
                              height="15"
                            >
                              <path
                                fill="#909399"
                                d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"
                              ></path>
                              <path
                                fill="#909399"
                                d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32"
                              ></path>
                              <path
                                fill="#909399"
                                d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z"
                              ></path>
                            </svg>
                            <p style="margin: 0 5px; color: #909399">
                              00:02:08
                            </p>
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
      <el-tab-pane
        label="Sertifikat"
        name="kedua"
        style="display: flex; justify-content: center"
      >
        <el-button
          v-show="progressPercentage == 100"
          class="buttonsertifikat"
          @click="downloadSertificate()"
          >Sertifikat Kompetensi</el-button
        >
        <p v-show="progressPercentage != 100" style="font-size: 12px ;">
          Sertifikat Kompetensi akan diberikan setelah Anda menyelesaikan
          seluruh materi dan tugas yang ada di kelas ini.
        </p>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
@import "../css/DetailClass.css";
</style>

<script>
import { ElNotification } from "element-plus";
import axios from "axios";

export default {
  data() {
    return {
      pilih: [],
      activeName2: "pertama",
      subActivity: [], // jumlah activity yang telah dibuka
      checkIcons: [],
      id: this.$route.params.id,
      activity: {},
      completed: [],
      customColor: [
        { color: "#F56C6C", percentage: 20 },
        { color: "#E6A23C", percentage: 40 },
        { color: "#409EFF", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#67C23A", percentage: 100 },
      ],
    };
  },

  methods: {
    countSubActivity(x) {
      if (!this.subActivity.includes(x)) {
        this.subActivity.push(x);
      }
    },

    downloadSertificate() {
          window.open("sertifikat.pdf", "_blank")
          ElNotification({
            title: "Success",
            message: "Sertifikat berhasil diunduh",
            type: "success",
          });
        },  
    

    countComplete(x) {
      if (!this.completed.includes(x)) {
        this.completed.push(x);
      }
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },

    openContent(sub_activity_id) {
      this.$emit("task", sub_activity_id);
      this.pilih.push(sub_activity_id);
      return this.pilih;
    },

    async addProgress(sub_activity_id) {
      await axios.post(
        `http://127.0.0.1:8000/api/user/classes/${this.id}`,
        {
          answer: "contoh",
          sub_activity_id: sub_activity_id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await axios.patch(
        `http://127.0.0.1:8000/api/user/classes/${this.id}`,
        {
          progress: (
            (this.completed.length / this.subActivity.length) *
            100.0
          ).toFixed(2),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      ElNotification({
        title: "Success",
        message: "You have finished the task",
        type: "success",
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
      return (
        (this.completed.length / this.subActivity.length) *
        100.0
      ).toFixed(2);
    },
  },

  mounted() {
    this.getClassActivity();
  },
};
</script>
