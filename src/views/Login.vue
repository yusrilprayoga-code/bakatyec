<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form">
    <form @submit.prevent="login">
      <label>Email:</label>
      <input v-model="email" type="text" />

      <label>Password:</label>
      <input v-model="password" type="password" />

      <button class="button-submit" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ElNotification } from "element-plus";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (this.email == "" || this.password == "") {
            ElNotification({
              title: "Error",
              message: "Email or Password is empty",
              type: "error",
            });
          } else {
            const token = response.data;
            localStorage.setItem("token", token);
            this.$root.$emit("updateAuthToken");
            ElNotification({
              title: "Success",
              message: "Login Success",
              type: "success",
            });
            this.$router.go()
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            ElNotification({
              title: "Error",
              message: "Email or Password is wrong",
              type: "error",
            });
          } else {
            console.error(error);
          }
        });
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
  margin-bottom: 300px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

label {
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  text-align: left;
}

input {
  margin-bottom: 10px;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  padding-left: 10px;
}

.button-submit {
  margin-top: 10px;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #409eff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #66b1ff;
}

.form {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
