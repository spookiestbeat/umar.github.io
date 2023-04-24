const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

document.querySelectorAll(".navbar-links").forEach(n => n.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
}))

/* animations */

window.onload = function() {
  // Your navbar initialization code here


      TweenMax.from(".image", 1.5, {
        delay: 0.7,
        opacity: 0,
        x: -600,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".navbar-logo", 1.5, {
        delay: 0,
        opacity: 0,
        y: -600,
        ease: Expo.easeInOut,
      });
      
      TweenMax.staggerFrom(
        ".navbar-links li ",
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

    };



    /***  $(document).bind("contextmenu",function(e) {
        e.preventDefault();
       });

      $(document).keydown(function(e){
        if(e.which === 123){
           return false;
        }
    }); ***/


    /* page slide */

    $(document).ready(function() {
      // Listen for click event on a link with class "page-link"
      $('.page-link').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
    
        // Slide out current page
        $('.page').css('transform', 'translateX(-100%)');
    
        // Load new page and slide it in
        setTimeout(function() {
          $('.page').load(href + ' .page', function() {
            $('.page').css('transform', 'translateX(0)');
          });
        }, 500);
      });
    });

