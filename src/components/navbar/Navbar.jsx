import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigationLinks = [
    ["/", "Home"],
    ["/tech", "Tech"],
    ["/cult", "Cult"],
    ["/sports", "Sports"],
    ["/mess", "Mess"],
    ["/council", "Council"],
  ];

  return (
    <>
      <div id="navbar">
        <span className="logo">
          <span className="hostelName" id="navbarHostelName">
            Hostel 5
          </span>
        </span>
        <span>
          <span
            className="links"
            onClick={() => {
              toggleMenu && setToggleMenu(!toggleMenu);
            }}
          >
            {navigationLinks.map((link, key) => {
              return (
                <Link
                  to={link[0]}
                  className="navLinksLink"
                  key={key}
                >
                  {link[1]}
                </Link>
              );
            })}
          </span>
          <span className="menuIcon" onClick={() => setToggleMenu(!toggleMenu)}>
            <div
              className="line1"
              style={{
                transform: toggleMenu ? "rotate(-45deg)" : "translate(0, -8px)",
              }}
            ></div>
            <div
              className="line2"
              style={{ maxWidth: toggleMenu ? "0" : "80%" }}
            ></div>
            <div
              className="line3"
              style={{
                transform: toggleMenu ? "rotate(45deg)" : "translate(0, 8px)",
              }}
            ></div>
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
          maxHeight: toggleMenu ? "280px" : "0px",
          // paddingTop: toggleMenu ? "50px" : "0px"
          // border: "2px solid red"
        }}
      >
        <span
          className="links"
          onClick={() => {
            toggleMenu && setToggleMenu(!toggleMenu);
          }}
        >
          {navigationLinks.map((link, key) => {
            return (
              <Link
                to={link[0]}
                className="navLinksLink"
                style={{
                  transform: toggleMenu ? "translate(0,0)" : "translate(0,50px)",
                  transitionDelay: !toggleMenu ? "0.5s" :`${0.05*key}s`,
                  transitionDuration: toggleMenu ? "var(--menu-transition-time)" : "0s"
                }}
                key={key}
              >
                {link[1]}
              </Link>
            );
          })}
        </span>
      </div>
    </>
  );
};
