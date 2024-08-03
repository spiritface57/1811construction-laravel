import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Menu from "./Menu";



function Header({ logoText, menuItems }) {
  const useCustomScripts = () => {
    useEffect(() => {
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };

      const toggleScrolled = () => {
        const selectBody = select("body");

        const selectHeader = document.querySelector("#header");
        if (
          !selectHeader ||
          (!selectHeader.classList.contains("scroll-up-sticky") &&
            !selectHeader.classList.contains("sticky-top") &&
            !selectHeader.classList.contains("fixed-top"))
        )
          return;
        window.scrollY > 100
          ? selectBody.classList.add("scrolled")
          : selectBody.classList.remove("scrolled");
      };

      document.addEventListener("scroll", toggleScrolled);
      window.addEventListener("load", toggleScrolled);

      const mobileNavToggleBtn = select(".mobile-nav-toggle");

      const mobileNavToogle = () => {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      };

      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

        document.querySelectorAll("#navmenu a").forEach((navmenu) => {
          navmenu.addEventListener("click", () => {
            if (document.querySelector(".mobile-nav-active")) {
              mobileNavToogle();
            }
          });
        });
      }

      document
        .querySelectorAll(".navmenu .toggle-dropdown")
        .forEach((navmenu) => {
          navmenu.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle("active");
            this.parentNode.nextElementSibling.classList.toggle(
              "dropdown-active"
            );
            e.stopImmediatePropagation();
          });
        });

      const preloader = document.querySelector("#preloader");
      if (preloader) {
        window.addEventListener("load", () => {
          preloader.remove();
        });
      }

      let scrollTop = document.querySelector(".scroll-top");
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
        }
      };

      scrollTop?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      window.addEventListener("load", toggleScrollTop);
      document.addEventListener("scroll", toggleScrollTop);

      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });

      const initSwiper = () => {
        document
          .querySelectorAll(".init-swiper")
          .forEach(function (swiperElement) {
            const swiperConfigElement =
              swiperElement.querySelector(".swiper-config");
            let config = {};

            if (swiperConfigElement) {
              try {
                config = JSON.parse(swiperConfigElement.innerHTML.trim());
              } catch (error) {
                console.error("Error parsing swiper config JSON:", error);
              }
            }

            if (swiperElement.classList.contains("swiper-tab")) {
              // initSwiperWithCustomPagination(swiperElement, config);
            } else {
              new Swiper(swiperElement, config);
            }
          });
      };

      window.addEventListener("load", initSwiper);

      return () => {
        document.removeEventListener("scroll", toggleScrolled);
        window.removeEventListener("load", toggleScrolled);
        window.removeEventListener("load", toggleScrollTop);
        document.removeEventListener("scroll", toggleScrollTop);
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.removeEventListener("click", mobileNavToogle);
        }
      };
    }, []);
  };

  useCustomScripts();
  
  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top text-dark"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1 className="sitename">{logoText}</h1> <span>.</span>
        </a>
        <Menu items={menuItems}  />
        
      </div>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </header>
  );
}

export default Header;

