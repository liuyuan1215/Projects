<template>
  <div class="con-pro">
    <div class="last">
      <van-icon size="25" color="#484848" name="arrow-left" @click="goLast" />
    </div>
    <div class="add-margin-top">
      <van-tabs color="#3750b2">
        <van-tab title="登录">
          <van-cell-group>
            <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
            <van-field
              label="密码"
              type="password"
              required
              clearable
              placeholder="请输入密码"
              v-model="loginPassword"
            ></van-field>
          </van-cell-group>
          <div>
            <van-button @click="loginHandler" color="#3750b2" round block type="info">登录</van-button>
          </div>
        </van-tab>
        <van-tab title="注册">
          <van-cell-group>
            <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
            <van-field
              label="密码"
              type="password"
              required
              clearable
              placeholder="请输入密码"
              v-model="registPassword"
            ></van-field>
          </van-cell-group>
          <div>
            <van-button @click="registHandler" color="#3750b2" round block type="info">注册</van-button>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
import url from "@/service.config.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: ""
    };
  },
  methods: {
    ...mapActions(["loginAction"]),
    //注册的处理方法
    registHandler() {
      axios({
        url: url.registUser,
        method: "post",
        data: {
          userName: this.registUsername,
          password: this.registPassword
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$toast.success("注册成功");
            this.registUsername = this.registPassword = "";
          } else {
            this.$toast.fail("注册失败1");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("注册失败2");
        });
    },
    //登录
    loginHandler() {
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.loginUsername,
          password: this.loginPassword
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            // 模拟
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                // reject();
              }, 1000);
            })
              .then(() => {
                this.$toast.success("登录成功");
                // 保存登录状态
                this.loginAction(res.data.userInfo);
                this.$router.go(-1);
              })
              .catch(err => {
                this.$toast.fail("保存登录状态失败");
                console.log(err);
              });
          } else {
            this.$toast.fail("登录失败1");
          }
        })
        .catch(err => {
          console.log(err);
          // this.$toast.fail("登录失败");
          Toast("登录失败2");
        });
    },
    goLast() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.con-pro{
  height: 100vh;
  background: #fff;
}
.last {
  position: fixed;
  // top: 10px;
  // left: 5px;
  padding-left: 5px;
  padding-top: 10px;
  z-index: 100;
}
.add-margin-top {
  padding-top: 30px;
}
</style>