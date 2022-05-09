$(function(){

  


    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': false,
      'alwaysShowNavOnTouchDevices':false,
      'fitImagesInViewport':true,
      'disableScrolling':true,
      'fadeDuration':'800'

    });



      $(window).scroll(function(){
      $('nav').toggleClass('scrolled',$(this).scrollTop()>200);
            });
            
            $('body').materialScrollTop();

           
});

// $(function(){});