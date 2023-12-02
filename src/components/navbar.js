import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span id="hostelNav">Hostel 5</span>
      <span className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/tech"}>Tech</Link>
        <Link to={"/cult"}>Cult</Link>
        <Link to={"/sports"}>Sports</Link>
      </span>
    </div>
  );
};
