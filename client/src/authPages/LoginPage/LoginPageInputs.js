import InputWithLabel from "../../shared/components/InputWithLabel"
export default function LoginPageInputs({mail,setMail,password,setPassword}) {
  return (
    <>
    <InputWithLabel value={mail} setValue={setMail} label='E-mail' type='text' placeholder='Enter e-mail address'/>
    <InputWithLabel value={password} setValue={setPassword} label='Password' type='password' placeholder='Enter password address'/>
    </>
  )
}
