$(() => {
  // Typed script for home page
  // To Do Use of Promises or Async Await for callbacks
  var typed = new Typed("#typed-name", {
    strings: ["bhav bains"],
    typeSpeed: 50,
    loop: false,
    showCursor: false,
    startDelay: 800,
  });
  var typed = new Typed("#typed-profession", {
    strings: ["web developer- full stack"],
    typeSpeed: 50,
    loop: false,
    showCursor: false,
    startDelay: 2000,
  });
  var typed = new Typed("#typed-skills", {
    strings: [
      "react",
      "graphql",
      "node",
      "es6",
      "sql/nosql",
      "html5",
      "sass",
      "css3",
      "wordpress",
      "jQuery",
      "mongoDB",
      "expressJs",
      "bootstrap",
    ],
    typeSpeed: 70,
    loop: true,
    backSpeed: 20,
    showCursor: false,
    startDelay: 4000,
    cursorChar: "|",
  });

  // Full page script

  new fullpage("#fullpage", {
    anchors: ["home", "me", "projects", "contact"],
    licenseKey: "",
    navigation: true,
    sectionSelector: ".section",
    slideSelector: ".showcase",
    slidesNavigation: true,
    controlArrows: true,
    lockAnchors: false,
    paddingTop: "1rem",
    paddingBottom: "10px",
    lazyLoading: true,
    loopBottom: true,
    css3: true,
    fitToSection: true,
    touchSensitivity: 4,
    menu: "#menu",
    navigation: true,
  });
});
