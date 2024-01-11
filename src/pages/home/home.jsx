import { Slide1, Slide2 } from "./slides/slides";
import "./home.css";
import { useEffect, useRef } from "react";
import { useHomeCSS } from "./components/useHomeCSS";

const Home = () => {
  const hostelHeading = document.getElementById("navbarHostelName");
  if (hostelHeading) {
    hostelHeading.textContent = "Hostel 5";
  }
  const homePage = useRef(null);
  useHomeCSS();

  let lastWheelEvent = Date.now();
  useEffect(()=>{
    const handleWheel = (event) => {
      event.preventDefault();
      if(Date.now() - lastWheelEvent < 300){
        return;
      }
      lastWheelEvent = Date.now();
      if (event.deltaY > 0) {
        homePage.current.scroll({
          top: homePage.current.scrollTop + homePage.current.clientHeight,
        });
      } else {
        homePage.current.scroll({
          top: homePage.current.scrollTop - homePage.current.clientHeight,
        });
      }
    }
    homePage.current.addEventListener("wheel", handleWheel)
  });

  return (
    <div
      className="hostelHomePage"
      ref={homePage}
    >
      <Slide1 />
      <Slide2 />
    </div>
  );
};

export default Home;
