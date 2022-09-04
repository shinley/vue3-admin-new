import { login, getUserInfo } from "@/api/sys";
import md5 from "md5";
import { getItem, setItem, removeAllItem } from "@/utils/storage";
import { TOKEN } from "@/constant";
import { defineStore } from "pinia";
import router from "../router";
import { setTimeStamp } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: getItem(TOKEN) || "",
    userInfo: {},
  }),
  getters: {
    /**
     * getters中的属性，不能和 state中的属性同名
     */
    getToken: (state) => state.token,
    /**
     * @returns true 表示用户信息已存在
     */
    hasUserInfo: (state) => {
      return JSON.stringify(state.userInfo) !== "{}";
    },
  },
  actions: {
    // 登录action
    login(userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            console.log("data响应", data.token);
            this.token = data.token;
            // 写入token
            setItem(TOKEN, data.token);
            // 保存登录时间
            setTimeStamp();
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 获取用户信息action
    async getUserInfo() {
      const res = await getUserInfo();
      this.userInfo = res;
      return res;
    },

    // 退出登录
    logout() {
      this.token = "";
      this.userInfo = {};
      removeAllItem();
      // TODO 清理权限相关配置

      // 跳转到登录页
      router.push("/login");
    },
  },
});
