import { logout, loginFail, loginSucc } from "./actionTypes";

const HandleLogin = (creds)=>async(dispatch)=>{
    try {
        
    } catch (error) {
        return dispatch({
            type:loginFail,
            payload:'Login Failed'
        })
    }
}

const HandleLogout = ()=>{
    return {
        type:logout
    }
}

export {HandleLogin, HandleLogout}

