import { Link } from "react-router-dom";
import "./divisions.css";
import image from "./image.jpg";

export const Divisions = () => {
  return (
    <div className="divisions homePageFirstChildren">
      <div className="division_container">
        <div className="cult division">
            <Link to={"/cult"} className="heading">CULTURALS</Link>
            <div className="image"></div>
            <div className="description">
            From vibrant cultural festivals to spirited 
            talent nights, Hostel 5 is a melting pot of 
            creativity, where diverse talents shine and 
            traditions come alive.
            </div>
        </div>
        <div className="tech division">
            <Link to={"/tech"} className="heading">TECHNICALS</Link>
            <div className="image"></div>
            <div className="description">
            At Hostel 5, innovation knows no bounds. 
            From hackathons to technical symposiums, 
            we're a hub of ideas where minds converge 
            to shape the future.
            </div>
        </div>
        <div className="sports division">
            <Link to={"/sports"} className="heading">SPORTS</Link>
            <div className="image"></div>
            <div className="description">
            In the arena of sports, Hostel 5 reigns 
            supreme. With state-of-the-art facilities 
            and a passion for excellence, we celebrate 
            teamwork, determination, and sporting prowess.
            </div>
        </div>
      </div>
    </div>
  );
};
