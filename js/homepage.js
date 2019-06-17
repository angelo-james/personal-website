window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (document.body.scrollTop > 1550 || document.documentElement.scrollTop > 1550) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
  document.getElementById("myBar").style.width = scrolled + "%";
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function($) { "use strict";

  $(document).ready(function(){"use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);	
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });				
    jQuery('.progress-wrap').on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    })
  });
})(jQuery);

var menu = document.querySelector( "#menu" );
var sidebar = document.querySelector( "#side-menu" );
var overlay = document.querySelector( "#overlay" );

  menu.addEventListener( "click", function(){
  this.classList.toggle( "active" );
  sidebar.classList.toggle( "active" );
  overlay.classList.toggle( "active" );
  overlay.onclick = function () {
    menu.classList.toggle( "active" );
    sidebar.classList.toggle( "active" );
    overlay.classList.toggle( "active" );
  }
});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
function resumeModal(resume) {
  modal.style.display = "block";
  modalImg.src = resume;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

$(document).ready(function() {
    
  // Whenever the window is scrolled ... 
  $(window).scroll( function(){
  
      // Check the location of the object
      $('.fade-in').each( function(i){
          
          // Find the location of the objects
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          
          // Find out how far we've scrolled down
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          // If we have scrolled past the bottom of the object,
          // fade it in!
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1000);
          }
      }); 
  });
})