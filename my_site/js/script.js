/** https://owlcarousel2.github.io/OwlCarousel2/ **/

$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  
  new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
  }).init();

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  $(window).scroll(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });

  $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin:10,
        nav:true,
        merge:true,
        responsive:{ 
            0:{ items:1 }, 
            767:{ items:2 }, 
            991:{ items:3 },
            1200:{items:4 } 
        } 
    });

  // function for form with php
  $('#bSent').click(function () {
    var name = $('#cName').val();
    var email = $('#cEmail').val();
    var message = $('#cMessage').val(); 

      if (name == "") {
        $('#cName').css('border-bottom', '2px solid red');
        return false;
      } else {
        $('#cName').css('border-bottom', '2px solid #90CAF9');

        if (email == "") {
          $('#cEmail').css('border-bottom', '2px solid red');
          return false;
        } else {
          $('#cEmail').css('border-bottom', '2px solid #90CAF9');

          if (message == "") {
            $('#cMessage').css('border-bottom', '2px solid red');
            return false;
          } 
        }
        $('#bSent').fadeOut();
        $('#message4').fadeIn();
      }
  });

  $(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if($(window).width() > 768){
      if(scroll > 100) {
        $("#header-nav").addClass("shadow");
        $("nav ul li a").css({"color":"#30374b"});
        $("#title-logo").css({"color":"#000"});
        $("#header-nav").css({"height":"85px",
                              "position":"fixed",
                              "border-radius":"0",
                              "padding-top":"20px",
                              "background":"#fff"});

      } else {

        $("#header-nav").css({"background":"transparent",
                              "padding-top":"20px",
                              "position":"relative", 
                              "height":"auto"});
        $("#header-nav").removeClass("shadow");
        $("nav ul li a").css({"color":"#fff"});
        $("#title-logo").css({"color":"#fff"});
        $("nav ul li").removeClass("active");
      }
    } else if ($(window).width() < 768) {
        if(scroll > 100) {
          $("nav ul li a").css({"color":"#30374b"});
          $("#title-logo").css({"color":"#000"});
          $("#header-nav").addClass("shadow");
          $("#header-nav").css({"height":"85px",
                                "position":"fixed",
                                "border-radius":"0",
                                "padding-top":"20px",
                                "background":"#fff"});
          $("#collapsable-nav").css({"background":"#fff"});
          $("#collapsable-nav").addClass("shadow");

        } else {

          $("#header-nav").css({"background":"transparent",
                                "padding-top":"20px",
                                "position":"relative", 
                                "height":"auto"});
          $("#header-nav").removeClass("shadow");
          $("nav ul li a").css({"color":"#fff"});
          $("#title-logo").css({"color":"#fff"});
          $("#collapsable-nav").css({"background":"transparent"});
          $("#collapsable-nav").removeClass("shadow");
          $("nav ul li").removeClass("active");
      }
    } 
  });
});

/* One page navigation scrolling */
$('#nav-list').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing'
});


(function (global) {
  var dc = {};
// Remove the class 'active' from home and switch to Menu button
  var switchMenuToActive = function () {
    // Remove 'active' from home button
    var classes = document.querySelector("#navHomeButton").className;
    classes = classes.replace(new RegExp("active", "g"),"");
    document.querySelector("#navHomeButton").className = classes;

    // Add 'active' to menu button if not already there
    classes = document.querySelector("#navMenuButton").className;
    if (classes.indexOf("active") == -1) {
      classes += " active";
      document.querySelector("#navMenuButton").className = classes;
    }
  };

  //switchMenuToActive();
  global.$dc = dc;

})(window);