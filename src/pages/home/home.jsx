import "./home.css";

const Home = () => {
  const hostelHeading = document.getElementById("navbarHostelName");
  if (hostelHeading) {
    hostelHeading.textContent = "Hostel 5";
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
