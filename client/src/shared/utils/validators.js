export const validateLoginForm =({mail,password})=>{
  const isMailValid= validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};
export const validateContactForm =({name,mail})=>{
  const isMailValid= validateMail(mail);
  const isName = validateName(name);


  return isMailValid && isName;
}

export const validateRegisterForm=({mail,username,password,name,phone})=>{
  return validateMail(mail) && validatePassword(password) && validateUsername(username) && 
  validatePhone(phone) &&
  validateName(name);
}
const validatePhone=(phone)=>{
  var pattern = new RegExp(/^[0-9\b]+$/);

  if (pattern.test(phone)) {
    console.log(phone);
      if(phone.length>7){
        return true;
      }
 

  }else if(phone.length < 7){


    return false;

  }


}
const validatePassword=(password)=>{
  return password.length >=6 && password.length<12;
}
const validateUsername=(username)=>{
  return username.length >=3 && username.length<12;
}
const validateName=(name)=>{
  return name.length >=3 && name.length<20;
}
export const validateMail=(mail)=>{
 const emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 return emailPattern.test(mail);

}