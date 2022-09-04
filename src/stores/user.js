import { login } from '@/api/sys'
import md5 from 'md5'
import {getItem, setItem} from '@/utils/storage'
import {TOKEN} from '@/constant'
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: getItem(TOKEN) || '', 
        userInfo: {}
    }),
    getters: {
        token: state => state.token,

        /**
         * @returns true 表示用户信息已存在
         */
        hasUserInfo: state => {
            return JSON.stringify(state.userInfo) !== '{}'
        }
    },
    actions: {
        // 登录action
        lg(userInfo) {
            console.log("我要登录")
            const  {username, password} = userInfo
            console.log(md5(password))
            login({username, password: md5(password)})
               
            return new Promise((resolve, reject) => {
                
            })
        },

        // 获取用户信息action
        async getUInfo() {
            const res = await getUserInfo()
            this.commit('user/setUserInfo', res)
        }
    }
})