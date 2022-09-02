import login from '@/api/sys'
import md5 from 'md5'

export default {
    namespaced: true, 
    state:  () => {},
    mutations: {},
    actions: {
        lg(context, userInfo) {
            console.log("登录action")
            const  {username, password} = userInfo
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                }).then(data => {
                    resolve()
                }).catch(err => {
                    reject()
                })
            })
        }
    }
}