import login from '@/api/sys'
import md5 from 'md5'
import {setItem, getItem} from '@/utils/storage'
import  { TOKEN } from  '@/constant/index'

export default {
    namespaced: true, 
    state:  () => {
        token: getItem(TOKEN) || ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            setItem(TOKEN, token)
        }
    },
    actions: {
        lg(context, userInfo) {
            const  {username, password} = userInfo
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                }).then(data => {
                    console.log(data)
                    this.commit('user/setToken', data.token)
                    resolve()
                }).catch(err => {
                    reject()
                })
            })
        }
    }
}