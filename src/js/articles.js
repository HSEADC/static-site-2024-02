import AOS from 'aos';
import TypeIt from "typeit";
import 'aos/dist/aos.css'; 


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



document.addEventListener("DOMContentLoaded", () => {

    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    
    function move() {
        curX += (tgX - curX) / 22
        curY +=  (tgY - curY) / 22
        interBubble.style.transform=`translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move()
        })
    }
    let cursorDot = document.querySelector(".cursorDot");
    let cursorOutline = document.querySelector(".cursorOutline");
    window.addEventListener("mousemove", (e) => {
        tgX = e.clientX;
        tgY = e.clientY;


        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left=`${posX}px`;
        cursorDot.style.top=`${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`,
        },
    {
        duration: 500, fill: "forwards"
    })

    })
    move()


})