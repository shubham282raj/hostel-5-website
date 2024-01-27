import "./home.css";
import { LandingPage } from "./components/landingPage/landingPage";
import { AboutUSPage } from "./components/aboutUsPage/aboutUsPage";
import { OurMissionPage } from "./components/ourMissionPage/ourMissionPage";

const Home = () => {
  const hostelHeading = document.getElementById("navbarHostelName");
  if (hostelHeading) {
    hostelHeading.textContent = "Hostel 5";
  }
  return (
    <div className="homePage">
      <LandingPage />
      <AboutUSPage />
      <OurMissionPage />
      <AboutUSPage />
      <OurMissionPage />
    </div>
  );
};

export default Home;
