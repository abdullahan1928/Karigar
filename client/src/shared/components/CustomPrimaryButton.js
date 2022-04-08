import React from 'react'
import Button from '@mui/material/Button'
export default function CustomPrimaryButton( {label,
  additionalStyles,
  disabled,
  onClick}) {
  return (
   <Button variant='contained'
   sx={{
     backgroundColor:"#CA7D23",
     
     color:'white',
     textTransform:'none',
     fontSize:'16px',
     fontWeight:'500',
     width:'300px',
     '&:hover': {
      backgroundColor: '#874900',
      color:'white',
      
  },
     
   }}
   style={additionalStyles ?additionalStyles :{}}
   disabled={disabled}
   onClick={onClick}

   >

{label}
   </Button>
  )
}
