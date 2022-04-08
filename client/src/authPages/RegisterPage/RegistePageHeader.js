import {Typography} from '@mui/material';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';

export default function RegisterHeader() {
  return (
    <>
    <Typography variant='h3' sx={{
      color:'black',
      fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '48px',
      marginLeft:'4rem'
  }}>
      Welcome to Karigaar!
    </Typography>
    <CustomPrimaryButton
    label='Sign up with google'
    additionalStyles={{
      marginTop:'1rem',
      marginLeft:'13rem',
      width:'200px',
      marginBottom:'2rem'


    }}
    />
    </>
  )
}
