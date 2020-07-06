// import {observable,action} from "mobx";
// import Axios from 'axios'
// import Api from '../api/index'

// export default class UserStore {
//     @observable loginData = []
//     @observable isLogin = false
//     @observable token = ""


//     // 登录的方法
//     @action
//     login=()=>{
//         console.log("仓库")
//         return new Promise((resolve,reject)=>{
//             Axios.post(`api`+Api.user.userLogin,{username:'abc',userPwd:'123'})
//             .then((res)=>{
//                 console.log("axios的打印")
//                 console.log(res)
//                 if(res.data.Code===200){
//                     this.loginData = res.data.data
//                     this.token = res.data.token
//                     resolve("登录成功")
//                 }else {
//                     reject("登录失败")
//                 }
//             })
//         })
//     }
// }