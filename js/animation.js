import gsap from "gsap"
let istoggled = false;
(async()=>{
    (await import("aos")).init()
    // let typed = (await import("typed.js")).default;
 
})()

// window.onscroll = function(ev) {
//   // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     // alert("bottom of the page reached");
//     console.log((window.innerHeight + window.scrollY));
//     console.log(document.body.offsetHeight);
//   // }
// };
// window.onscroll = function() {
//   // var d = document.documentElement;
//   // var offset = (d.scrollTop + window.innerHeight) - 300;
//   // var height = d.offsetHeight;

//   // console.log('offset = ' + offset);
//   // console.log('height = ' + height);

//   // if (offset === height) {
//   //   console.log('At the bottom');
//   //   // loadmore(); // call function here
//   // }
// };

gsap.registerPlugin(ScrollTrigger)

// gsap.to(".typed-con",{
//     scrollTrigger:{
//         trigger: ""
//     }
// })

// window.onload = ()=>{
    // let textes = gsap.utils.toArray("main .header .hover h1")
    // console.log(textes);
    // let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})
    gsap.to("h1",{
    // //     // duration:2,
    // // "clip-path": "inset(0 0 0 0)",
    // // "--clips":"100%",
    //     // "clip-path" : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    // //     // opacity:0,
    //     y:-100,
    //     stagger: 0.4,
    })
    // gsap.to(".typed-con",
// }

document.querySelector(".toggle-btn").onclick = () => {
    console.log("haha");
    istoggled = !istoggled;
    istoggled
    ? document.querySelector(".toggle-con").classList.remove("hidden")
    : document.querySelector(".toggle-con").classList.add("hidden");
  };

