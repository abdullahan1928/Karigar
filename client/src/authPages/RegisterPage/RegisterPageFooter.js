import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import {  useNavigate } from "react-router-dom";
import {Tooltip} from '@mui/material';
const getFormValidNotMessage=()=>{
  return 'Username should be between 3 and 12 characters. Password should contain 6 and 12 characters. Also correct email address required...And Phone number and name required'
}
const getFormValidMessage=()=>{
  return 'Press to register'
}

export default function RegisterPageFooter({handleRegister,isFormValid}) {

  const navigate = useNavigate();
  const  handlePushToLoginPage =()=>{
 navigate({ pathname: '/login' })
  }
  return (
    <>
    <Tooltip title={!isFormValid? getFormValidNotMessage() : getFormValidMessage()}>

     <div>

     <CustomPrimaryButton
     label='Register'
     additionalStyles={{marginTop:'30px',
    marginLeft:"10rem"}}
     disabled={!isFormValid}
     onClick={handleRegister}
     />
      </div>
     </Tooltip>
      <RedirectInfo 
      text=''
      redirectText='Already have an account?'
      additionalStyles={{marginTop:'5px',
    marginLeft:'13rem'}}
      redirectHandler={handlePushToLoginPage}/>
       </>
  )
}
