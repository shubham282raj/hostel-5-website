import "./aboutUsPage.css";
import image from "./image.jpg";

export const AboutUSPage = () => {
  return (
    <div className="aboutUs homePageFirstChildren">
      <div className="container">
        <div className="image">
          <div className="decorativeBorder"></div>
          <img src={image} alt="" />
        </div>
        <div className="content">
          <div className="heading">About Us</div>
          <div className="description">
          Located within the vibrant campus of the prestigious Indian Institute of Technology Bombay, 
          Hostel 5 stands as more than just a residence; it's a community, a home away from home for 
          students from diverse backgrounds and disciplines. With a rich history spanning decades, 
          Hostel 5 has been a cornerstone of student life, fostering academic excellence, camaraderie, and personal growth.
          </div>
        </div>
      </div>
    </div>
  );
};
