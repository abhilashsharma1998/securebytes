import AboutUsPage from "../pages/about-us/AboutUsPage";
import ContactUsPage from "../pages/contact-us/ContactUsPage";
import HomePage from "../pages/home/HomePage";
import OurServicesPage from "../pages/our-services/OurServicesPage";
// import RedirectPage from "../pages/redirect/RedirectPage";

export const menuLinks = [
  {
    path: "/",
    label: "Home",
    component: HomePage,
    showOnMenuBar: true,
  },
  {
    path: "/about",
    label: "About",
    component: AboutUsPage,
    showOnMenuBar: true,
  },
  {
    path: "/services",
    label: "Services",
    component: OurServicesPage,
    showOnMenuBar: true,
  },
  {
    path: "/contact",
    label: "Contact",
    component: ContactUsPage,
    showOnMenuBar: true,
  },
  {
    path: "*",
    label: "Home",
    component: HomePage,
    showOnMenuBar: false,
  },
];
