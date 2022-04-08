import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Home from '../images/home.jpeg';
import Logo from '../images/logooo.png';
import homeServices from '../images/homeServices.jpg';
import plumber from '../images/plumbing.jpg';
import Electric from '../images/electricain.jpg';
import plumberHome from '../images/plumberHome.jpg';
import Mechanic from '../images/Mechanic.jpg';
import aboutUs from '../images/about.png';
import Navbar from '../shared/components/Navbar/Navbar';
import Typed from 'react-typed';
import './About.css';
import CustomPrimaryButton from '../shared/components/CustomPrimaryButton';
import { useNavigate } from 'react-router-dom';


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());



const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/service')
  }
  function handleClick2() {
    navigate('/contact')
  }
  return (
    <>
 
 
 <div>
<ScrollContainer>
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <img src={Home} alt="" />
        <span style={{ fontSize: "30px" }}>
        <Typed
        strings={['Now Sitting from your Home',
                  'You can book for any service',
                 'Top Pakistan Based Service','At your door step','Book Kaarigar!']}
                    typeSpeed={40}
                    backSpeed={50}
                    className='typedText'
                    loop
                />
      </span>
      </Animator>
    </ScrollPage>
    <ScrollPage page={1}>
      <Animator animation={ZoomInScrollOut}>
        <span style={{ fontSize: "44px" ,
      fontFamily: 'Fredoka One',
      marginLeft:'2rem'}}>Kaarigar The Name of new Era ✨</span>
        <img src={Logo} alt="" style={{width:'300px',
      marginLeft:'13rem'}}/>
      </Animator>
    </ScrollPage>
    <ScrollPage page={2}>
      <Animator animation={FadeUp}>
      
        <img src={homeServices} alt="" />
      </Animator>
    </ScrollPage>
    <ScrollPage page={3}>
      <Animator animation={ZoomInScrollOut}>
        <img src={plumber} alt="" style={{
      width:'500px',
      marginLeft:'6rem'}}/>
      </Animator>
    </ScrollPage>
    <ScrollPage page={4}>
      <Animator animation={FadeUp}>
      
      <img src={Electric} alt="" style={{
      width:'500px',
      marginLeft:'6rem'}}/>
      </Animator>
    </ScrollPage>
    <ScrollPage page={5}>
      <Animator animation={ZoomInScrollOut}>
        <img src={Mechanic} alt="" style={{
      width:'500px',
      marginLeft:'6rem'}}/>
      </Animator>
    </ScrollPage>
    <ScrollPage page={6}>
      <Animator animation={ZoomInScrollOut}>
        <img src={plumberHome} alt="" style={{
      width:'500px',
      marginLeft:'6rem'}}/>
      </Animator>
    </ScrollPage>
    
   
    <ScrollPage page={7}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
        <span style={{ fontSize: "40px",
        fontFamily:'poppins',
        fontWeight:'500' }}>
          <Animator animation={MoveIn(-1000, 0)}>The Best Services in Pakisan</Animator>
          <Animator animation={MoveIn(1000, 0)}>At your home🏠</Animator>Just a Click Away 👆 
          <Animator animation={MoveOut(1000, 0)}>Book your Karigaar Now 👨‍🔧</Animator>
          <Animator animation={MoveOut(-1000, 0)}>Enjoy your day</Animator>
        </span>
      </div>
    </ScrollPage>
    <ScrollPage page={8}>
      <Animator animation={batch(Fade(), Sticky())}>
        <div style={{
          marginLeft:'8rem'
        }}>

        <img src={aboutUs} alt="" />
    
        <CustomPrimaryButton label='Book Now'
      additionalStyles={{
        marginLeft:'1rem',
        fontSize:'1.35rem',
        marginTop:'1rem',
        width:'450px',
        height:'50px',
        fontWeight:"700"
      }}
      onClick={handleClick}
      />
       <CustomPrimaryButton label='Contact Us'
      additionalStyles={{
        marginLeft:'1rem',
        fontSize:'1.35rem',
        marginTop:'1rem',
        width:'450px',
        height:'50px',
        fontWeight:"700"
      }}
      onClick={handleClick2}/>
      </div>
      </Animator>
    </ScrollPage>
  </ScrollContainer>
   </div>   
    
    </>
  )
}

export default About
