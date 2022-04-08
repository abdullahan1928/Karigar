import * as api from '../../api';
import {openAlertMessage} from './alertActions';
export const authActions ={
  // firstly, declaring the action we can name whatever we want but we have to follow the convention
  SET_USER_DETAILS:"AUTH.SET_USER_DETAILS",
};
// This function will enable us to execute (dispatch) all the actions like register and login
export const getActions=(dispatch)=>{
  return{
    login:(userDetails,history)=>dispatch(login(userDetails,history)),
    register:(userDetails,history)=>dispatch(register(userDetails,history))
  }
}
const setUserDetails=(userDetails)=>{
  return{
    type:authActions.SET_USER_DETAILS,
    userDetails
  }
}
const login =(userDetails,history)=>{
  return async (dispatch)=>{
    const response = await api.login(userDetails)
    console.log(response)
    if(response.error){
dispatch(openAlertMessage(response?.exception?.response?.data));
    }
    else{
      const {userDetails}= response?.data;
      // Adding item to localStorage
      
      localStorage.setItem('user',JSON.stringify(userDetails))

      dispatch(setUserDetails(userDetails));
      history('/',{ replace: true })
 
     }
    }
}

const register =(userDetails,navigate)=>{
  return async (dispatch)=>{
    const response = await api.register(userDetails)
    console.log(response)
    if(response.error){
      dispatch(openAlertMessage(response?.exception?.response?.data)); 
    }
    else{
      const {userDetails}= response?.data;
      localStorage.setItem('user',JSON.stringify(userDetails))

      dispatch(setUserDetails(userDetails)); 
      navigate('/login',{ replace: true })
 
     }
    }
}
