import React from 'react'
import Box from '@mui/material/Box';
import {styled} from '@mui/system';
const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  // alignItems:'flex-end',
  justifyContent:'flex-end',
  background:'white'
})

export default function AuthBox(props) {

  return (
    <div>
    <BoxWrapper    
     >
      <img src={props.img} alt=""  
        style={props.additionalImageStyles ?props.additionalImageStyles :{
          marginLeft:'-2rem',
        width:'800px',
        height:'600px',}}
        />
     
      
      <Box sx={{
        width:680,
        height:680,
        bgcolor:'white',
        marginTop:'50px',
        marginRight:'60px',
        borderRadius:'5px',
        boxShadow:'0 2px 10px 0 rgb(0 0 0 / 20%)',
        display:'flex',
        flexDirection:"column",
        padding:'25px'
      }}
      style={props.additionalStyles ?props.additionalStyles :{}}
      >

        {props.children}
      </Box>

      </BoxWrapper>  
    </div>
  )
}
