import hostel5Banner from "../images/hostel5Banner.jpg";
import slide2backgroundimage from '../images/slide2background.jpg'

import "./slides.css";
import "./exclusiveCSS.css"

const Slide1 = () => {
  return (
    <div className="homepageSlides homepageSlide1">
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

const Slide2 = () => {
  return (
    <div className="homepageSlides homepageSlide2">
      <div className="homepageImgContainer">
        <img src={slide2backgroundimage} alt="hostel5Banner" />
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

export {Slide1, Slide2}