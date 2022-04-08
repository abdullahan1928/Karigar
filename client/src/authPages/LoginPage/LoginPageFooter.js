import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import {  useNavigate } from "react-router-dom";
import {Tooltip} from '@mui/material';
const getFormValidNotMessage=()=>{
  return 'Enter correct email address and password should contain 6 to 12 characters'
}
const getFormValidMessage=()=>{
  return 'Press to Login'
}

export default function LoginPageFooter({handleLogin,isFormValid}) {

  const navigate = useNavigate();
  const  handlePushToRegisterPage =()=>{
 navigate({ pathname: '/register' })
  }
  return (
    <>
    <Tooltip title={!isFormValid? getFormValidNotMessage() : getFormValidMessage()}>

     <div>

     <CustomPrimaryButton
     label='Login'
     additionalStyles={{marginTop:'30px',
     marginLeft:'10rem',
     height:'40px'
    }}
     disabled={!isFormValid}
     onClick={handleLogin}
     />
      </div>
     </Tooltip>
      <RedirectInfo 
      text='Need an account? '
      redirectText='Create an Account'
      additionalStyles={{marginTop:'7px',
      marginLeft:'11rem'}}
      redirectHandler={handlePushToRegisterPage}/>
       </>
  )
}
