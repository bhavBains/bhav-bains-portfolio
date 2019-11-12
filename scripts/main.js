$(() => {
  // Typed script for home page
  // To Do Use of Promises or Async Await for callbacks
  var typed = new Typed("#typed-name", {
    strings: ["bhav bains"],
    typeSpeed: 50,
    loop: false,
    showCursor: false,
    startDelay: 800
  });
  var typed = new Typed("#typed-profession", {
    strings: ["web developer- full stack"],
    typeSpeed: 50,
    loop: false,
    showCursor: false,
    startDelay: 2000
  });
  var typed = new Typed("#typed-skills", {
    strings: [
      "javaScript",
      "react",
      "html5",
      "css3",
      "jQuery",
      "node.js",
      "sql",
      "mongoDB",
      "expressJs",
      "bootstrap",
      "wordpress"
    ],
    typeSpeed: 70,
    loop: true,
    backSpeed: 20,
    showCursor: false,
    startDelay: 4000,
    cursorChar: "|"
  });

  // Full page script

  $("#fullpage").fullpage({
    anchors: ["first", "second", "third", "fourth"],
    sectionSelector: ".section",
    slideSelector: ".showcase",
    navigation: true,
    slidesNavigation: true,
    menu: "#menu",
    lockAnchors: false,
    controlArrows: true,
    verticalCentered: true
    // css scrolling
    // css3: true,
    // scrollingSpeed: 700,
    // autoScrolling: true,
    // fitToSection: true,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',
    // fixedElements: '.main-nav',
  });
});
