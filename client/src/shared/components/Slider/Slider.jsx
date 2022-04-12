import "./Slider.css";
import SimpleImageSlider from "react-simple-image-slider";

import AC from '../../../images/AC.jpg';
import car from '../../../images/car.jpg';
import carpenter from '../../../images/Carpenter.jpg';
import velding from '../../../images/velding.jpg';
const images = [AC,car,carpenter,velding];


const SliderManual = () => {
  return (
    <div className='slider'>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlayDelay={2}
        navSize={50}
        navMargin={30}
        navStyle={1}
        loop={true}
        autoPlay={true}
        useGPURender={true}
      
        
      />
    </div>
  );
}
export default SliderManual;