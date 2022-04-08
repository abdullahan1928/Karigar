import { styled } from '@mui/system';
import {Typography} from '@mui/material';

const RedirectText=styled("span")({
  color:"#00AFF4",
  fontWeight:500,
  cursor:"pointer"
})
export default function RedirectInfo({text,redirectText,additionalStyles,redirectHandler}) {
  return (
  <Typography
  sx={{
    color:'black'}}
    style={additionalStyles ?additionalStyles :{}}
    variant='subtitle2'
     

  >
{text} 
<RedirectText onClick ={redirectHandler}>{redirectText}</RedirectText>
  </Typography>
  )
}
