import { useEffect } from "react";
import { useState } from "react";

export const useThemeSwitch = () => {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("userSelectedTheme") == "1" || true
  ); //true is white, false is dark
  const toggleTheme = () => {
    localStorage.setItem("userSelectedTheme", !colorMode ? 1 : 0);
    setColorMode(!colorMode);
  };

  const applyTheme = () => {
    const root = document.documentElement.style;

    root.setProperty(
      "--background-color",
      colorMode ? "white" : "rgba(33,40,50,255)"
    );
    root.setProperty("--white", colorMode ? "black" : "white")

    //navbar colors
    if (colorMode) {
      document.getElementById("navbar").style.borderBottom = "2px solid black";
    }

    root.setProperty("--navbar-bg", colorMode ? "white" : "rgb(8,18,30)");
    root.setProperty(
      "--navbar-hostelname-color",
      colorMode ? "black" : "white"
    );
    root.setProperty("--navbar-links-color", colorMode ? "black" : "white");
    root.setProperty("--menu-icon-center-color", colorMode ? "black" : "white");
    root.setProperty("", colorMode ? "" : "");

    //tab color settings
    root.setProperty(
      "--tab-card-bg",
      colorMode ? "rgb(245,245,245)" : "rgba(20,30,40,255)"
    );
    root.setProperty("--tab-text-color", colorMode ? "black" : "white");
    root.setProperty("", colorMode ? "" : "");
    

    //load more and read more btns
    root.setProperty("--load-more-bg", colorMode ? "rgb(245,245,245)" : "rgba(20,30,40,255)");
    root.setProperty("--load-more-border-color", colorMode ? "none" : "white");
    root.setProperty("--load-more-color", colorMode ? "black" : "white");
    root.setProperty("--read-more-border-color", colorMode ? "black" : "white");

    //footer navigations
    root.setProperty("--footer-text-color", colorMode ? "black" : "white");
    root.setProperty("--footer-selected-color", colorMode ? "#DDDDDD" : "black");
    root.setProperty(
      "--footer-selected-bg",
      colorMode ? "rgb(70,70,70)" : "white"
    );
    root.setProperty("", colorMode ? "" : "");
  };

  useEffect(() => {
    setColorMode(localStorage.getItem("userSelectedTheme") == "1");
  }, []);

  useEffect(() => {
    applyTheme();
  }, [colorMode]);

  return { colorMode, toggleTheme };
};
