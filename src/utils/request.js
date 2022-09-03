import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
})

//响应拦截器
service.interceptors.response.use(response => {
    const {code, data, message, } =  response.data
    // 判断当前请求是否成功
    // 成功返回解析后的数据
    if (code === 200) {
        return data
    } else {
        // 失败(请求成功， 业务失败)， 消息提示
        ElMessage.error(message)
        return Promise.reject(new Error(message))
    }
    
}, error=>{
    ElMessage.error(error.message)
    return Promise.reject(error)
})

export default service