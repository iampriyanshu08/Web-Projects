const mouseCursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (e) {
  mouseCursor.style.left = e.clientX + "px";
  mouseCursor.style.top = e.clientY + "px";
  cursorBlur.style.left = e.clientX - 250 + "px";
  cursorBlur.style.top = e.clientY - 250 + "px";
});

var h4All = document.querySelectorAll("#nav h4");

h4All.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (e) {
    console.log(e);
    mouseCursor.style.scale = 3;
    mouseCursor.style.border = "1px solid #fff";
    mouseCursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function (e) {
    console.log(e);
    mouseCursor.style.scale = 1;
    mouseCursor.style.border = "1px solid red";
    mouseCursor.style.backgroundColor = "red";
  });
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.to("#nav", {
  backgroundColor: "red",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 3,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,

  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers : true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,

  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers : true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers : true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

// create the scrollSmoother before your scrollTriggers
