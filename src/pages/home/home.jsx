import "./home.css";
import { LandingPage } from "./components/landingPage/landingPage";
import { AboutUSPage } from "./components/aboutUsPage/aboutUsPage";
import { OurMissionPage } from "./components/ourMissionPage/ourMissionPage";
import { useLoadContent } from "../../components/loadPost/useLoadContent";

const Home = () => {

  const [loadFirebaseOnce] = useLoadContent("home", 1);

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
