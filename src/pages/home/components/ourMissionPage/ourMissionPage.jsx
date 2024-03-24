import "./ourMissionPage.css"
import image from "./image.jpg";

export const OurMissionPage = () => {
  return (
    <div className="ourMission homePageFirstChildren">
      <div className="container">
        <div className="content">
          <div className="heading">Our Mission</div>
          <div className="description">
          At Hostel 5, our mission is simple yet profound: to provide an inclusive and 
          nurturing environment where every resident can thrive academically, socially, 
          and personally. We strive to cultivate a culture of respect, collaboration, 
          and innovation, empowering our residents to pursue their passions, excel in 
          their studies, and make meaningful contributions to society.
          </div>
        </div>
        <div className="image">
          <div className="decorativeBorder"></div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};