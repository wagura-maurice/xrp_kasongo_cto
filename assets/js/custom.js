// assets/js/custom.js
document.addEventListener("DOMContentLoaded", function () {
  // Add active class to clicked nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        document.querySelector(".nav-link.active")?.classList.remove("active");
        this.classList.add("active");
      }
    });
  });

  // Toggle Mobile Menu
  const navbarToggler = document.querySelector(".navbar-toggler");
  const toggleMenuIcon = document.querySelector(".toggle-menu-icon");
  const navbarRight = document.getElementById("navbar-right");

  if (navbarToggler && toggleMenuIcon && navbarRight) {
    navbarToggler.addEventListener("click", function (event) {
      toggleMenuIcon.classList.toggle("open");
      navbarRight.classList.toggle("show");
      event.stopPropagation(); // Prevent event from bubbling up
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navbarRight.contains(event.target) &&
        !navbarToggler.contains(event.target)
      ) {
        navbarRight.classList.remove("show");
        toggleMenuIcon.classList.remove("open");
      }
    });
  }

  // Fixed Header on Scroll
  const header = document.querySelector("header");
  const pageScroll = 100;

  window.addEventListener("scroll", function () {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll >= pageScroll) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Load Image on Scroll (Example for tokenomics chart)
  const tokenomicsChart = document.querySelector(".tokenomics-chart");
  const initialSrc = ""; // Initial image source
  const scrollSrc = "assets/images/tekeno-cart.svg"; // Image source to load on scroll

  if (tokenomicsChart) {
    window.addEventListener("scroll", function () {
      const value = window.pageYOffset || document.documentElement.scrollTop;
      if (value > 800) {
        tokenomicsChart.setAttribute("src", scrollSrc);
      } else {
        tokenomicsChart.setAttribute("src", initialSrc);
      }
    });
  }
});
