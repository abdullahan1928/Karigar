import React from 'react'
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  display:'flex',
  justifyContent:'center',
  flexDirection:'column',
  width:'100%'
})
const Label = styled('p')({
 color:'black',
 textTransform:'uppercase',
 fontWeight:'600',
 fontSize:'16px',
 marginBottom:'.5rem'

})
const Input = styled('input')({
  flexGrow:1,
  height:'40px',
  
  border:'none',
  borderRadius:'5px',
  color:'black',
  background:'#EFF0F2',

  margin:'0',
  fontSize:'16px',
  padding:'0 5px',
  marginBottom:".5rem",
  '&:focus': {
    border:'1px solid #background: #CA7D23',
    borderRadius:'5px',

    
},
  
})

export default function InputWithLabel(props) {
  const {value,setValue,label,type,placeholder}=props;
  const handleValueChange=(e)=>{
    setValue(e.target.value);
  }
  return (
  <Wrapper>
    <Label>
    {label}
    </Label>
    <Input  value={value} onChange={handleValueChange} type={type}
    placeholder={placeholder}
    style={props.additionalStyles ?props.additionalStyles :{}}/>
  </Wrapper>

  )
}
