import { useEffect } from "react";

export const useHomeCSS = () => {
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
  return;
};
