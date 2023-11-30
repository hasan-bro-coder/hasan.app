import Lenis from '@studio-freight/lenis'

import gsap from "gsap"

export const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


let els = ["#about","#home"]
let ls = 0 

els.forEach((el,i)=>{
  document.querySelector(`${el}er`).onclick= ()=>{
    lenis.scrollTo(el)
  }
})
$(window).scroll(function() {  
  let st = document.documentElement.scrollTop;
	if (st > ls && !(st == -1)) {
    console.log("yo");
		// n.style.top = "-60px"
		gsap.to("nav", {
			duration: 0.6,
			y: -66,
			// ease: Elastic.easeOut.config(1, 0.23)
		});
	} else {
		// n.style.top = "0px"
		gsap.to("nav", {
			duration: 0.4,
			y: 0,
			// ease: Elastic.easeOut.config(1, 0.233)
		});
	}
	ls = st;

  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    lenis.scrollTo(0)
  }
        //  {alert("bottom reached!");   }   
  
}); 

let mains = gsap.utils.toArray(".main")
gsap.registerPlugin(ScrollTrigger)

mains.forEach((el,i)=>{
  gsap.to(el,{
    scrollTrigger:{
        trigger: el,
        pin: true,
        // markers: true,
        start: ()=> "-=" + 100,
        end: ()=> "+=" + 800
    }
  })
})
