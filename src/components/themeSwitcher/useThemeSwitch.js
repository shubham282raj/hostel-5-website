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
      colorMode ? "rgb(186, 186, 186)" : "rgba(33,40,50,255)"
    );

    //navbar colors
    root.setProperty("--navbar-bg", colorMode ? "white" : "rgba(8,18,30,255)");
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
      colorMode ? "white" : "rgba(20,30,40,255)"
    );
    root.setProperty("--tab-text-color", colorMode ? "black" : "white");
    root.setProperty("", colorMode ? "" : "");
    root.setProperty("", colorMode ? "" : "");

    //footer navigations
    root.setProperty("--footer-text-color", colorMode ? "black" : "white");
    root.setProperty("--footer-selected-color", colorMode ? "white" : "black");
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