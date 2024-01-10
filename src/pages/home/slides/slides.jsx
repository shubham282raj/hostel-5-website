import hostel5Banner from "../images/hostel5Banner.jpg";
import "./slides.css";

export const Slides = () => {
  return (
    <div className="homepageSlides">
      <div className="homepageImgContainer">
        <img src={hostel5Banner} alt="hostel5Banner" />
      </div>
      <div className="slideText">
        <div className="heading">HOSTEL 5</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          dolorem sequi, dolore illum consequuntur minima, nemo non esse
          recusandae fugit numquam perspiciatis. Aspernatur cupiditate magni
          quaerat beatae porro, ducimus aliquid?
        </div>
      </div>
    </div>
  );
};
