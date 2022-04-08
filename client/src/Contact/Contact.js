import React,{useState,useEffect,useRef} from 'react'
import AuthBox from '../shared/components/AuthBox';
import ContactPageFooter from './ContactPageFooter';
import ContactPageHeader from './ContactPageHeader';
import ContactPageInputs from './ContactPageInputs';
import { validateContactForm} from '../shared/utils/validators';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import contact from '../images/customer.jpg';

const Contact=()=> {
  const navigate = useNavigate();
  const [mail,setMail]=useState("");
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  const [isFormValid,setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateContactForm({name,mail}));
  },[mail,name,setIsFormValid]) 

  const handleLogin=()=>{
  
  
   
  }
  const contactForm = useRef();

  const sendEmail = (e) => {
    const userDetails={
      name,
      mail,
      message
        }
    e.preventDefault();

    emailjs.send(
      'service_xlmw46n',
       'template_nv3hfra', 
       userDetails,
       'user_UH5ALqQzf7x1VCQiHv30A')
      .then((result) => {
          console.log(result.text);
          console.log(userDetails);
          navigate('/dashboard')
         
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    
   <AuthBox img={contact} additionalImageStyles ={{
     width:'700px'
   }}>
     <ContactPageHeader/>
     <form onSubmit={sendEmail} ref={contactForm}>
     <ContactPageInputs mail={mail}
     setMail={setMail}
     name={name}
     setName={setName}
     message={message}
     setMessage={setMessage}
     ref={contactForm}
     
     />
   
     <ContactPageFooter isFormValid={isFormValid} handleLogin={sendEmail}/>
     </form>
   </AuthBox>
     </>
  )
}

export default Contact;