import { Slides } from "./components/slides";
import "./home.css";
import { useEffect, useRef } from "react";

const Home = () => {
  const hostelHeading = document.getElementById("navbarHostelName");
  if (hostelHeading) {
    hostelHeading.textContent = "Hostel 5";
  }
  const homePage = useRef(null);
  useEffect(() => {
    const navbarPadding = document.getElementById("universalNavbarPadding");
    if (navbarPadding) navbarPadding.style.height = 0;
    const footerPadding = document.getElementById("universalFooterPadding");
    if (navbarPadding) footerPadding.style.height = 0;
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
    }
    window.scrollTo({ top: "0px" });
    return () => {
      // Reset the values when component is unmounted or navigated away from the homepage
      if (navbarPadding) navbarPadding.style.height = ""; // Reset to default value
      if (footerPadding) footerPadding.style.height = ""; // Reset to default value
      if (navbar) {
      navbar.style.background = "";
      navbar.style.backdropFilter = "";
    }
      window.scrollTo({ top: "0px" });
    };
  }, []);

  return (
    <div
      className="hostelHomePage"
      ref={homePage}
      onWheel={(event) => {
        event.preventDefault();
        if (event.deltaY > 0) {
          homePage.current.scroll({
            top: homePage.current.scrollTop + homePage.current.clientHeight,
          });
        } else {
          homePage.current.scroll({
            top: homePage.current.scrollTop - homePage.current.clientHeight,
          });
        }
      }}
    >
      <Slides />
      <Slides />
    </div>
  );
};

export default Home;
