/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {

   $('body').fadeIn(500);

   /*----------------------------------------------------*/
   /* Smooth Scrolling
   ------------------------------------------------------ */

   $('.smoothscroll').on('click', function (e) {
      e.preventDefault();

      var target = this.hash,
         $target = $(target);

      $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
         window.location.hash = target;
      });
   });


   /*----------------------------------------------------*/
   /* Highlight the current section in the navigation bar
   ------------------------------------------------------*/

   var sections = $("section");
   var navigation_links = $("#nav-wrap a");

   sections.waypoint({

      handler: function (event, direction) {

         var active_section;

         active_section = $(this);
         if (direction === "up") active_section = active_section.prev();

         var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
         active_link.parent().addClass("current");

      },
      offset: '25%'

   });



   /*----------------------------------------------------*/
   /*	Make sure that #header-background-image height is
   /* equal to the browser height.
   ------------------------------------------------------ */


   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function () {
      $('header').css({ 'height': $(window).height() });
   });


   /*----------------------------------------------------*/
   /*	Fade In/Out Primary Navigation
   ------------------------------------------------------*/
   $(document).ready('DOMContentLoaded', manage_flag());
   $(window).on('scroll', manage_flag);

   function manage_flag() {

      var h = $('header').height();
      var y = $(window).scrollTop();
      var nav = $('#nav-wrap');
      var flag = $('.flag');
      var gotop = $('#go-top-fixed');

      //Grand + sur mon nom
      if ((y > h * 0.18) && (y < h) && ($(window).outerWidth() > 900)) {
         flag.fadeOut('fast');
         nav.fadeOut('fast');
      }
      //Petit + sur mon nom
      else if ((y > h * 0.18) && (y < h)) {
         flag.fadeOut('fast');
      }
      else {
         //en haut
         if (y < h * 0.18) {
            flag.fadeIn('fast');
            nav.removeClass('opaque').fadeIn('fast');
         }
         //tout le reste du site
         else {
            nav.addClass('opaque').fadeIn('fast');
            flag.hide();
         }
      }


      //Manage top button
      if (y < h)
      {
         gotop.fadeOut('fast');
      }
      else if (((document.querySelector('html').offsetHeight - document.querySelector('footer').offsetHeight - 60) - (window.innerHeight + window.scrollY)) < 0)
      {
         gotop.fadeOut('fast');
      }
      else {
         gotop.fadeIn('fast');
      }
   }



   /*----------------------------------------------------*/
   /*	Flexslider
   /*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });


});