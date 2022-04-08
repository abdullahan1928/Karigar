import React ,{useState,useEffect} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import registerImage from '../../images/reg.png';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import {connect} from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import RegisterHeader from './RegistePageHeader';

const RegisterPage=({register})=> {
  const navigate = useNavigate();

  const [mail,setMail]=useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [isFormValid,setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateRegisterForm({mail,
      username,password,name,phone}));
  },[mail,password,phone,name,setIsFormValid])
  
  const handleRegister=()=>{
  const userDetails={
    name,
    phone,
    username,
    mail,
    password,
  }
  register(userDetails,navigate)
  
  }
  return (
   <AuthBox img={registerImage}
   additionalImageStyles={{
    width:'620px',
    height:'500px',
    marginTop:'6rem',

  }}
   additionalStyles={{
     marginRight:'15rem',
     marginTop:'2rem',
   }}>
     <RegisterHeader/>
     <RegisterPageInputs
     name={name}
     setName={setName}

     phone={phone}
     setPhone={setPhone}


     mail={mail}
     setMail={setMail}

     username={username}
     setUsername ={setUsername}

     password={password}
     setPassword={setPassword}
     />
     
     <RegisterPageFooter isFormValid={isFormValid} handleRegister={handleRegister}/>
   </AuthBox>
  )
}
const mapActionsToProps =(dispatch)=>{
  return{ 
    ...getActions(dispatch),

  }
}
export default connect(null,mapActionsToProps)(RegisterPage);
