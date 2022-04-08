import React,{useState,useEffect} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import { validateLoginForm} from '../../shared/utils/validators';

import {connect} from 'react-redux';
// getActions will be used to get the actions from the redux store
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../images/login.png';
/**
 * TODO
 * 
 */
// Login props will be provided from the redux store by the below function 
const LoginPage=({login})=> {
  const navigate = useNavigate();
  const [mail,setMail]=useState("");
  const [password,setPassword] = useState("");
  const [isFormValid,setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLoginForm({mail,password}));
  },[mail,password,setIsFormValid])

  const handleLogin=()=>{
  const userDetails={
mail,
password
  }
    login(userDetails,navigate)
  }


  return (
    <>
    
   <AuthBox img={loginImage}>
     <LoginPageHeader/>
     <LoginPageInputs mail={mail}
     setMail={setMail}
     password={password}
     setPassword={setPassword}/>
     <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
   </AuthBox>
     </>
  )
}
// mapActionsToProps will be used to map the actions to the props
const mapActionsToProps =(dispatch)=>{
  return{
    ...getActions(dispatch),

  }
}
export default connect(null,mapActionsToProps)(LoginPage);