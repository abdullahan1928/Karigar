import React from 'react'
import CustomPrimaryButton from '../shared/components/CustomPrimaryButton';
import {  useNavigate } from "react-router-dom";
import {Tooltip} from '@mui/material';
const getFormValidNotMessage=()=>{
  return 'Enter your name and email'
}
const getFormValidMessage=()=>{
  return 'Press to send the message'
}

export default function ContactPageFooter({handleLogin,isFormValid}) {

  const navigate = useNavigate();

  return (
    <>
    <Tooltip title={!isFormValid? getFormValidNotMessage() : getFormValidMessage()}>

     <div>

     <CustomPrimaryButton
     label='Send'
     additionalStyles={{marginTop:'30px',
     marginLeft:'10rem',
     height:'40px'
    }}
     disabled={!isFormValid}
     onClick={handleLogin}
     />
      </div>
     </Tooltip>
       </>
  )
}
