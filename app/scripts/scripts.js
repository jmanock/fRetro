document.addEventListener('DOMContentLoaded', function(){
 $(document).ready(function(){
  var sections = $('section');
  var nav = $('nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function(){
   var cur_pos = $(this).scrollTop();
   sections.each(function(){
    var top = $(this).offset().top - nav_height;
    var bottom = top + $(this).outerHeight();
    if(cur_pos >= top && cur_pos <= bottom){
     nav.find('a').removeClass('active');
     sections.removeClass('active');
     $(this).addClass('active');
     nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
   });
  });
  nav.find('a').on('click',function(){
   var $el = $(this);
   var id = $el.attr('href');
   $('html, body').animate({
    scrollTop:$(id).offset().top - nav_height
   }, 500);
   return false;
  });
  $('.container').on('click', function(){
   $('.navList').toggle();
  });
  $('.navList a').on('click', function(e){
   e.preventDefault();
   var $el = $(this);
   var id = $el.attr('href');
   $('html, body').animate({
    scrollTop:$(id).offset().top - nav_height
   }, 500);
   return false;
  });
 });
});

function initMap(){
  var uluru = {
    lat:28.6486639786372,
    lng:-81.3540162583253
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:16,
    center:uluru
  });
  var marker = new google.maps.Marker({
    position:uluru,
    map:map
  });
}
