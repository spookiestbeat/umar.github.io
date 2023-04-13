const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/* animations */

      TweenMax.from(".title", 1.5, {
        delay: 0,
        opacity: 0,
        x: 600,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".hamburger", 1.5, {
        delay: 0,
        opacity: 0,
        y: -400,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".image", 1.5, {
        delay: 0.7,
        opacity: 0,
        x: -600,
        ease: Expo.easeInOut,
      });


      TweenMax.staggerFrom(
        ".nav-menu li ",
        1.5,
        {
          delay: 1,
          opacity: 0,
          x: -30,
          ease: Expo.easeInOut,
        },
        0.08
      );

      TweenMax.from(".info", 1.5, {
        delay: 1,
        opacity: 0,
        x: 600,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".borderBottom", 1.5, {
        delay: 1.5,
        opacity: 0,
        y: 400,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".borderRight", 1.5, {
        delay: 1.5,
        opacity: 0,
        y: 400,
        ease: Expo.easeInOut,
      });