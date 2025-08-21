import car_video from '../../assets/car_video.mp4'
import car1 from '../../assets/car1.jpg'
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.jpg";

const background = (playStatus,heroCount) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={car_video} type="video/mp4" />
      </video>
    );
  } 
  else if (heroCount === 0) {
    return <img src="car1" className="background" alt="" />;
  }
  else if (heroCount === 1) {
    return <img src="car2" className="background" alt="" />;
  } 
  else if (heroCount === 2) {
    return <img src="car3" className="background" alt="" />;
  }
}

export default background
