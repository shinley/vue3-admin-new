import router from './router'
import { useUserStore } from '@/stores/user'

// 白名单 
const whiteList = ['/login']



export const usePermission = (pinia) => {
    const userStore = useUserStore()
    /**
     * 路由前置守卫
     * @param {*} to 要到哪里去
     * @param {*} from 从哪里来
     * @param {*} next 是否要去 
     */
    router.beforeEach(async (to, from, next) => {
        console.log('store', userStore.token)
        
        if(userStore.token) {
            // 1. 用户已登录， 则不允许时入login
            if (to.path === '/login') {
                next('/')
            } else {
                // 判断用户资料是否存在， 如果不存在，则获取用户信息
                if (!userStore.hasUserInfo) {
                await userStore.dispatch('getUInfo')
                }
                next()
            }
        } else {
            // 2. 用户未登录， 只允许时入login
            if (whiteList.indexOf(to.path) > -1) {
                next()
            } else {
                next('/login')
            }
        }
    })


}