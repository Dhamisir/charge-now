import { logout, loginFail, loginSucc,signupSucc,
    signupFail,
    signupLoad } from "./actionTypes";
let initState = {
    email:'',
    isLogin:false,
    msg:'',
    error:false,
    role:''
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
                role:''
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
                role:payload.role
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