import "./landingPage.css";
import image from "./image.png";

export const LandingPage = () => {
  return (
    <div className="landingPage homePageFirstChildren">
      <div className="image">
      <img src={image} alt="hostelGateImage"/>
      </div>
      <div className="content">
        <div className="heading">Hostel 5</div>
        <div className="description">
        Welcome to the beating heart of student life at 
        IIT Bombay — where camaraderie meets academic 
        excellence, and every corridor echoes with the 
        spirit of innovation. Welcome to Hostel 5, your 
        home away from home.
        </div>
        
      </div>
    </div>
  );
};
