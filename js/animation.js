import gsap from "gsap"

let istoggled = false;
(async()=>{
    (await import("aos")).init()
    let typed = (await import("typed.js")).default;
  const typeded = new typed("#typed", {
    strings: ["Bro", "Sis", "User", "Coder"],
    typeSpeed: 50, 
    loop: true,
  });
})()

// window.onscroll = function(ev) {
//   // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     // alert("bottom of the page reached");
//     console.log((window.innerHeight + window.scrollY));
//     console.log(document.body.offsetHeight);
//   // }
// };
window.onscroll = function() {
  // var d = document.documentElement;
  // var offset = (d.scrollTop + window.innerHeight) - 300;
  // var height = d.offsetHeight;

  // console.log('offset = ' + offset);
  // console.log('height = ' + height);

  // if (offset === height) {
  //   console.log('At the bottom');
  //   // loadmore(); // call function here
  // }
};

gsap.registerPlugin(ScrollTrigger)

gsap.to(".typed-con",{
    scrollTrigger:{
        trigger: ""
    }
})

document.querySelector(".toggle-btn").onclick = () => {
    console.log("haha");
    istoggled = !istoggled;
    istoggled
    ? document.querySelector(".toggle-con").classList.remove("hidden")
    : document.querySelector(".toggle-con").classList.add("hidden");
  };

