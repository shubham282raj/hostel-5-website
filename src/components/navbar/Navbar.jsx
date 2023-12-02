import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";



export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const LinkComponent = () => {
    return (
      <span className="links" onClick={()=>{toggleMenu && setToggleMenu(!toggleMenu)}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/tech"}>Tech</Link>
        <Link to={"/web"}>Web</Link>
        <Link to={"/cult"}>Cult</Link>
        <Link to={"/sports"}>Sports</Link>
        <Link to={"/mess"}>Mess</Link>
        <Link to={"/council"}>Council</Link>
      </span>
    );
  };

  return (
    <>
      <div id="navbar">
        <span className="logo">
          <span className="hostelName">Hostel 5</span>
        </span>
        <span>
          <LinkComponent />
          <span className="menuIcon" onClick={() => setToggleMenu(!toggleMenu)}>
            <div className="line1" style={{transform: toggleMenu? "rotate(-45deg)" : "translate(0, -8px)"}}></div>
            <div className="line2" style={{maxWidth: toggleMenu? "0" : "80%"}}></div>
            <div className="line3" style={{transform: toggleMenu? "rotate(45deg)" : "translate(0, 8px)"}}></div>
          </span>
        </span>
      </div>
      {/* {toggleMenu && (
        <div className="linkMenu">
          <LinkComponent />
        </div>
      )} */}
      <div
        className="linkMenu"
        style={{
          maxHeight: toggleMenu ? "240px" : "0",
        }}
      >
        <LinkComponent />
      </div>
    </>
  );
};
