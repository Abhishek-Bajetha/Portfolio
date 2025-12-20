const loader = document.getElementById("loader");
const h1 = document.createElement("h1");
let count = 0;
function loading() {
  h1.textContent = `${count}%`;

  loader.append(h1);
  if (count === 100) {
    setTimeout(() => {
        loader.style.transform = "translateY(-100vh)";
    }, 1000);
    return;
  }

  count += Math.floor(Math.random() * 10);

  if (count > 100) count = 100;

  setTimeout(loading, Math.floor(Math.random() * 200) - 50);
}

loading();

var tl = gsap.timeline();
tl.from(".nav", {
  y: -100,
  duration: 0.5,
  delay: 1,
  opacity: 0,
});
tl.from(".nav-inner1", {
  y: -50,
  duration: 0.2,
  opacity: 0,
});
tl.from(".nav-inner2 h4", {
  y: -50,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".nav-inner3 .about", {
  y: -50,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".nav-inner3 .btncontainer .navbtn", {
  y: -50,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".myname #rightname", {
  x: 150,
  stagger: 0.25,
  opacity: 0,
});
tl.from(".myname .leftname", {
  y: 50,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".myname-inner .mynamebtn", {
  y: 50,
  stagger: 0.2,
  opacity: 0,
});

// ------------------------------------about-me---------------------------------------------

gsap.from(".aboutme .aboutme-main", {
  rotate: 35,
  // x: 200,

  opacity: 0,
  scrollTrigger: {
    trigger: ".aboutme",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from(".aboutme .aboutme-main .left-aboutme", {
  y: 100,
  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".aboutme",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 50%",
    end: "top 25%",
  },
});
gsap.from(".aboutme .aboutme-main .right-aboutme", {
  y: 100,
  duration: 0.2,
  opacity: 0,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".aboutme",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 35%",
    end: "top 25%",
  },
});
// -----------------------------------education----------------------------------------------------
gsap.from(".education", {
  // duration: 1,
  backgroundColor: "white",
  // stagger: .25,
  scrollTrigger: {
    trigger: ".education",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 65%",
    end: "top 10%",
  },
});

gsap.from(".education h3", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".education",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 25%",
    end: "top 10%",
  },
});

gsap.from(".education .inner-education", {
  // y: 100,
  rotate: -30,
  opacity: 0,
  // backgroundColor: "black",

  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".education",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 35%",
    end: "top 20%",
  },
});
gsap.from(".education .inner-education h5", {
  y: 10,
  // rotate:-30,
  opacity: 0,
  // duration: 1,
  // stagger: 0.25,
  scrollTrigger: {
    trigger: ".education",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 15%",
    end: "top 5%",
  },
});
gsap.from(
  ".education .inner-education .edu1,.education .inner-education .edu2,.education .inner-education .edu3",
  {
    x: -100,
    opacity: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".education",
      scroller: "body",
      // markers: true,
      scrub: 2,
      start: "top 20%",
      end: "top 10%",
    },
  }
);

// --------------------------------------------my-skills-----------------------------------------------------
gsap.from(".myskills h3", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".myskills h3",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 55%",
    end: "top 25%",
  },
});
gsap.to(".myskills .skill-container", {
  transform: "translate(-30%)",
  scrollTrigger: {
    trigger: ".myskills",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
// -------------------------my-project----------------------------------
gsap.from(".myprojects h3", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: ".myprojects h3",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.from(".myprojects .project-container .projects", {
  scale: 0,
  rotate: 360,
  scrollTrigger: {
    trigger: ".myprojects h3",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 35%",
    scrub: 2,
  },
});
// ----------------MY-BLOG---------------------------------
gsap.from(".myblogs h3", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: ".myblogs h3",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.from(".myblogs .blogcontent", {
  x: -1000,
  // stagger: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: ".myblogs .blogcontent",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 45%",
    scrub: 2,
  },
});
// -------------------------footer------------------------------------
gsap.from(
  ".footer h4, .footer .holder h4 , .footer .holder .links img, .footer #myresume ",
  {
    y: -50,
    stagger: 0.6,
    opacity: 0,
    delay:.5,
    scrollTrigger: {
      trigger: ".myblogs .blogcontent",
      scroller: "body",
      // markers: true,
      start: "top 38%",
      end: "top 28%",
      scrub: 3,
    },
  }
);
