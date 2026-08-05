"use strict";

/* =========================================================
   KATE LENNON CREATIVE PORTFOLIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     ELEMENTS
  ======================================================= */

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const sidebar = document.getElementById("sidebar");

  const navigationLinks = document.querySelectorAll(".nav-link");
  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");
  const projectButtons = document.querySelectorAll(
    ".project-image-button"
  );

  const projectModal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById(
    "modalDescription"
  );
  const modalRole = document.getElementById("modalRole");
  const modalTools = document.getElementById("modalTools");
  const modalType = document.getElementById("modalType");
  const modalProjectLink = document.getElementById(
    "modalProjectLink"
  );

  const closeModalButtons = document.querySelectorAll(
    "[data-close-modal]"
  );

  const currentYear = document.getElementById("currentYear");


  /* =======================================================
     PROJECT INFORMATION

     Edit this information as you add your real projects.
  ======================================================= */

  const projects = {
    "project-1": {
      title: "80s Made Me Collection",
      category: "Graphic Design",
      description:
        "A colorful retro-inspired graphic design collection created for apparel, handbags, accessories, and promotional materials.",
      role: "Graphic Designer",
      tools: "Canva, Photoshop",
      type: "Merchandise Design",
      image: "80sAd.png",
      link: "https://toasted-pineapple.printify.me/product/30622241"
    },

    "project-2": {
      title: "Toasted Pineapple Campaign",
      category: "Advertising & Marketing",
      description:
        "A social media advertising campaign created to showcase handmade products, strengthen brand identity, and attract potential customers.",
      role: "Designer & Marketer",
      tools: "Canva, Social Media",
      type: "Digital Advertising",
      image: "34size.png",
      link: "https://toasted-pineapple.printify.me/product/30622241"
    },

    "project-3": {
      title: "From One To Another",
      category: "Web Design",
      description:
        "A responsive nonprofit website designed to promote community events, fundraising campaigns, volunteer opportunities, and outreach programs.",
      role: "Web Designer",
      tools: "HTML, CSS, JavaScript",
      type: "Nonprofit Website",
      image: "fromonetoanotherAD.png",
      link: "https://caitlennshots.github.io/FromOneToAnother/"
    },

    "project-4": {
      title: "Affordable Solar",
      category: "Advertising & Marketing",
      description:
        "A collection of graphic designs for affordable solar energy products and services.",
      role: "Digital Marketer & Designer",
      tools: "Canva, Photoshop",
      type: "Merchandise Design",
      image: "IMG_2306.PNG",
      link: "IMG_2306.PNG"
    },

    "project-5": {
      title: "Home Services Advertising",
      category: "Advertising & Marketing",
      description:
        "Promotional advertisements designed for roofing, solar, HVAC, and home-service businesses.",
      role: "Digital Marketer",
      tools: "Canva, Meta Business Suite",
      type: "Marketing Campaign",
      image: "roofingsolutions.PNG",
      link: "roofingsolutions.PNG"
    },

    "project-6": {
      title: "River Roots Store",
      category: "Web Development",
      description:
        "A responsive React e-commerce portfolio project featuring product categories, filtering, and shopping cart functionality.",
      role: "Front-End Developer",
      tools: "React, JavaScript, CSS",
      type: "E-Commerce Website",
      image: "rrootsad.png",
      link: "https://caitlennshots.github.io/River-Roots-Store/"
    },

    "project-7": {
      title: "Nature’s Lens",
      category: "Photography",
      description:
        "A wildlife and nature photography collection focused on animals, landscapes, outdoor environments, and visual storytelling.",
      role: "Photographer",
      tools: "Photography, Photo Editing",
      type: "Photography Collection",
      image: "F80D0207-0A23-425A-958A-C68AAB202405.PNG",
      link:
        "F80D0207-0A23-425A-958A-C68AAB202405.PNG"
    },

    "project-8": {
      title: "Logo Collection",
      category: "Brand Identity",
      description:
        "A collection of logos and visual identity concepts created for businesses, organizations, apparel, and personal brands.",
      role: "Brand Designer",
      tools: "Canva, Illustrator",
      type: "Logo Design",
      image: "tplogo.png",
      link: "tplogo.png"
    },

    "project-9": {
      title: "Creative Photo Editing",
      category: "Marketing & Advertising",
      description:
        "A collection of professional photo editing and retouching projects for roofing, solar, and HVAC businesses, including image enhancement, composites, and visual storytelling.",
      role: "Marketing Specialist",
      tools: "Photoshop, Canva",
      type: "Marketing & Advertising",
      image: "solarmax.PNG",
      link: "solarmax.PNG"
    },

    "project-10": {
        title: "RidgeMax Roofing Marketing Campaign",
        category: "Advertising & Marketing",
        description:
          "A comprehensive marketing campaign for RidgeMax Roofing, including social media ads, promotional graphics, and brand messaging.",
        role: "Marketing Specialist",
        tools: "Canva, Meta Business Suite",
        type: "Marketing Campaign",
        image: "ridgemaxroofing.JPEG",
        link: "ridgemaxroofing.JPEG"
    }
  };


  /* =======================================================
     MOBILE SIDEBAR
  ======================================================= */

  function toggleMobileMenu() {
    if (!mobileMenuButton || !sidebar) {
      return;
    }

    const menuIsOpen = sidebar.classList.toggle("open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      String(menuIsOpen)
    );

    const icon = mobileMenuButton.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars", !menuIsOpen);
      icon.classList.toggle("fa-xmark", menuIsOpen);
    }
  }

  function closeMobileMenu() {
    if (!mobileMenuButton || !sidebar) {
      return;
    }

    sidebar.classList.remove("open");

    mobileMenuButton.setAttribute("aria-expanded", "false");

    const icon = mobileMenuButton.querySelector("i");

    if (icon) {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
    }
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener(
      "click",
      toggleMobileMenu
    );
  }

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigationLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

      if (window.innerWidth <= 920) {
        closeMobileMenu();
      }
    });
  });


  /* =======================================================
     CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  ======================================================= */

  document.addEventListener("click", (event) => {
    if (
      window.innerWidth > 920 ||
      !sidebar ||
      !mobileMenuButton ||
      !sidebar.classList.contains("open")
    ) {
      return;
    }

    const clickedInsideSidebar = sidebar.contains(
      event.target
    );

    const clickedMenuButton = mobileMenuButton.contains(
      event.target
    );

    if (!clickedInsideSidebar && !clickedMenuButton) {
      closeMobileMenu();
    }
  });


  /* =======================================================
     PORTFOLIO FILTERING
  ======================================================= */

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      projectCards.forEach((card) => {
        const cardCategory = card.dataset.category;

        const shouldShow =
          selectedFilter === "all" ||
          selectedFilter === cardCategory;

        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });


  /* =======================================================
     PROJECT MODAL
  ======================================================= */

  function openProjectModal(projectId) {
    const project = projects[projectId];

    if (!project || !projectModal) {
      return;
    }

    if (modalImage) {
      modalImage.src = project.image;
      modalImage.alt = project.title;
    }

    if (modalCategory) {
      modalCategory.textContent = project.category;
    }

    if (modalTitle) {
      modalTitle.textContent = project.title;
    }

    if (modalDescription) {
      modalDescription.textContent = project.description;
    }

    if (modalRole) {
      modalRole.textContent = project.role;
    }

    if (modalTools) {
      modalTools.textContent = project.tools;
    }

    if (modalType) {
      modalType.textContent = project.type;
    }

    if (modalProjectLink) {
      const hasValidLink =
        project.link && project.link !== "#";

      modalProjectLink.href = hasValidLink
        ? project.link
        : "#";

      modalProjectLink.style.display = hasValidLink
        ? "inline-flex"
        : "none";
    }

    projectModal.hidden = false;
    document.body.classList.add("modal-open");

    const closeButton =
      projectModal.querySelector(".modal-close");

    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeProjectModal() {
    if (!projectModal) {
      return;
    }

    projectModal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.dataset.project;
      openProjectModal(projectId);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", closeProjectModal);
  });


  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      projectModal &&
      !projectModal.hidden
    ) {
      closeProjectModal();
    }
  });


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  if (currentYear) {
    currentYear.textContent = new Date()
      .getFullYear()
      .toString();
  }


  /* =======================================================
     UPDATE ACTIVE NAVIGATION WHILE SCROLLING
  ======================================================= */

  const pageSections = document.querySelectorAll(
    "section[id]"
  );

  function updateActiveNavigation() {
    let currentSectionId = "";

    pageSections.forEach((section) => {
      const sectionTop = section.offsetTop - 180;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
          sectionTop + sectionHeight
      ) {
        currentSectionId = section.id;
      }
    });

    navigationLinks.forEach((link) => {
      const linkTarget = link
        .getAttribute("href")
        ?.replace("#", "");

      link.classList.toggle(
        "active",
        linkTarget === currentSectionId
      );
    });
  }

  window.addEventListener(
    "scroll",
    updateActiveNavigation
  );

  updateActiveNavigation();


  /* =======================================================
     RESET MOBILE MENU WHEN WINDOW IS RESIZED
  ======================================================= */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
      closeMobileMenu();
    }
  });
});