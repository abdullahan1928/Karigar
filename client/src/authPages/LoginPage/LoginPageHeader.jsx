import { Typography } from '@mui/material';

export default function LoginPageHeader() {
  return (
    <>
      <Typography variant='h3' sx={{
        color: 'black',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '48px',
        marginLeft: '4rem'
      }}>
        Welcome to Karigaar!
      </Typography>
      <Typography sx={{
        color: 'black',
        marginLeft: '10rem',
        marginBottom: '4rem'
      }}>
        One Step Away from easing your life
      </Typography>
    </>
  )
}
