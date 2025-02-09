import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuLinks } from "../../constants/menu-links";
import "./menu.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // setIsMenuOpen((prev) => !prev);
  };

  const tl = useRef();

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", {
        y: 75,
      });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    {
      scope: container,
    }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo" style={{ fontWeight: "900" }}>
          <Link style={{ color: "black" }} href="/">
            SECUREBYTES
          </Link>
        </div>
        <div
          className={`menu-open ${isMenuOpen ? "opening" : ""}`}
          onClick={toggleMenu}
        >
          <p>MENU</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo" style={{ fontWeight: "900" }}>
            <Link style={{ color: "black" }} href="/">
              SECUREBYTES
            </Link>
          </div>
          {/* <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div> */}
          <div className="menu-close-icon" onClick={toggleMenu}>
            {/* <p>&#x2715;</p> */}
            <p>CLOSE</p>
            <div className={`burger ${isMenuOpen ? "burgerActive" : ""}`}></div>
          </div>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks
              ?.filter((item) => item.showOnMenuBar)
              ?.map((item, index) => {
                return (
                  <div className="menu-link-item" key={index}>
                    <div className="menu-link-item-holder" onClick={toggleMenu}>
                      {/* a tag */}
                      <NavLink
                        to={item.path}
                        className="menu-link"
                        onMouseOver={() =>
                          setSelectedLink({ isActive: true, index })
                        }
                        onMouseLeave={() =>
                          setSelectedLink({ isActive: false, index })
                        }
                      >
                        <p
                          className={`${
                            selectedLink.isActive &&
                            selectedLink.index !== index
                              ? "link-hovered"
                              : "link-not-hovered"
                          }`}
                        >
                          {item.label}
                        </p>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <div onClick={() => window.open("mailto:info@securebytes.com")}>
                X{" "}
              </div>
              <div onClick={() => window.open("mailto:info@securebytes.com")}>
                Instagram{" "}
              </div>
              <div onClick={() => window.open("mailto:info@securebytes.com")}>
                LinkedIn{" "}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="menu-preview">
          <p>View Showreel</p>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
