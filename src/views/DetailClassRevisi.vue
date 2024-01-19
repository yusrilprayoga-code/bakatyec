<template>
  <div class="container" style="text-align: start; margin-top: 50px">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        ><a href="#/class-menu" style="color: #f05326"
          >Kelas Saya</a
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item>
        <p style="color: #f05326; margin: 0; font-weight: bold">Detail Kelas</p>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <h2>{{ kelas.class_name }}</h2>
    <el-row justify="space-between">
      <el-col :span="24" :md="{ span: 15 }">
        <MateriSubActivity style="display: none;" />
        <MateriDetailClass  />
      </el-col>
      <el-col :span="24" :md="{ span: 8 }">
        <ActivityDetailClass />
      </el-col>
    </el-row>
  </div>
</template>
<style>
@import "../css/DetailClass.css";
</style>

<script>
import MateriDetailClass from "../components/MateriDetailClass.vue";
import ActivityDetailClass from "../components/ActivityDetailClass.vue";
import MateriSubActivity from "../components/MateriSubActivity.vue";
import axios from 'axios';

export default {
  
  data() {
    return {
        id: this.$route.params.id,
        kelas: {},
        activity: {},
    };
  },
  components: {
    MateriDetailClass,
    ActivityDetailClass,
    MateriSubActivity,
  },

  methods: {
    async getDataClassDetail() {
      try {
            const response = await axios.get(
          `http://127.0.0.1:8000/api/user/classes/${this.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // this.loading = false;
        this.kelas = response.data.class;
        console.log(this.kelas);
        } catch (error) {
            console.error("Error fetching user classes:", error);
        }
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
                    subActivityId: subActivityItem.activity_id,
                    subActivityName: subActivityItem.sub_activity_name,
                    subActivityNumber: subActivityItem.sub_activity_number,
                    subActivityContent: subActivityItem.content,
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
        this.getDataClassDetail();
        this.getClassActivity();
    },
};
</script>
