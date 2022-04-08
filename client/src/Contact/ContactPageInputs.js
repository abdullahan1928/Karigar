import InputWithLabel from "../shared/components/InputWithLabel"
export default function ContactPageInputs({mail,setMail,name,setName,message,setMessage}) {
  return (
    <>
     <InputWithLabel value={name} setValue={setName} label='Name' type='text' placeholder='Enter your name'/>
    <InputWithLabel value={mail} setValue={setMail} label='E-mail' type='text' placeholder='Enter e-mail address'/>
   
    <InputWithLabel value={message} setValue={setMessage} label='Message' type='text' placeholder='Enter your Message' additionalStyles={
    {
      height:'100px',
      
    }}/>
   
    </>
  )
}
