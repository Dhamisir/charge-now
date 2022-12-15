import { logout, loginFail, loginSucc } from "./actionTypes";
let initState = {
    email:'',
    isLogin:false,
    msg:'',
    error:false,
    role:'',
    mailinglist:[]
}
const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case(logout):{
            return {
                ...state,
                email:'',
                isLogin:false,
                msg:'',
                error:false,
                role:'',
                mailinglist:[]
            }
        }
        case(loginFail):{
            return {
                ...state,
                email:'',
                isLogin:false,
                msg:'Login Failed',
                error:true,
                role:''
            }
        }
        case(loginSucc):{
            return {
                ...state,
                email:payload.email,
                isLogin:true,
                msg:'Login Successful',
                error:false,
                role:payload.role,
                mailinglist:[...payload.serviceEmail]
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}

export {reducer}