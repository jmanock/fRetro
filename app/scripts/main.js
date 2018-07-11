function myMap(){
  var uluru = {lat:28.6486639786372, lng:-81.3540162583253};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
  });
  var marker = new google.maps.Marker({
    position:uluru,
    map:map
  });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyYc6U2BcmWssKCfAH6emQovnWTrfUIpn8o1a9mGrZ5XAPAav4/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {method:'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response), thankYou())
    .catch(error => console.error('Error!', error.message));
});
// Need to figure out how to block dates
function thankYou(){
  $(document).ready(function(){
    $('form').hide();
    $('.thankYou').css({display:'block'});
  });
}

$(document).ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop':$target.offset().top - 85
    }, 900, 'swing', function(){
    });
  });
});

function DisableThur(date){
  var day = date.getDay();
  if(day === 4){
    return [false];
  }else{
    return [true];
  }
}
$(function(){
  $('#datepicker').datepicker({
    beforeShowDay: DisableThur
  });
});
