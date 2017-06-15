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
      });// End `Sections`
    });// End `Scroll`
    nav.find('a').on('click', function(){
      var $el = $(this);
      var id = $el.attr('href');
      $('html, body').animate({
        scrollTop:$(id).offset().top - nav_height
      }, 500);
      return false;
    });

    $('#Date').hide();
    $('#showDate').text('Please Select a Date.');
    $('.datepicker').datepicker({
      prevText:'<i class="fa fa-fw fa-angle-left"></i>',
      nextText:'<i class="fa fa-fw fa-angle-right"></i>'
    });
    $('.datepicker').on('change', function(e){
      e.preventDefault();
      var date = $(this).val();
      $('.date').text('Date: '+date);
      $('#Date').val(date);
      $('#Date').hide();
    });// End `Change`
  });// End `Ready`
});// End `Listener`

function initMap(){
  var uluru = {lat:28.6486639786372, lng:-81.3540162583253};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
  });
  var marker = new google.maps.Marker({
    position:uluru,
    map:map
  });
}// End `initMap`

function validEmail(email){
  var re =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function getFormData(){
  var elements = document.getElementById('BookNow').elements;
  var fields = Object.keys(elements).map(function(k){
    if(elements[k].name !== undefined){
      return elements[k].name;
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self){
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = "";
    if(elements[k].type === 'checkbox'){
      str = str + elements[k].checked + ', ';
      data[k].str.slice(0,-2);
    }else if(elements[k].length){
      for(var i = 0; i<elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].itme(i).value + ', ';
          data[k].str.slice(0,-2);
        }
      }
    }
  });
  console.log(data);
  return data;
}

function handleFormSubmit(event){
  event.preventDefault();
  var data = getFormData();
  if(!validEmail(data.email)){
    // document.getElementById('email-invalid').style.display = 'block';
    return false;
  }else{
    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function(){
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);
      document.getElementById('BookNow').style.display = 'none';
      document.getElementById('thankyou_message').style.display = 'block';
      return;
    };
    var encoded = Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}// End `Submit`

function loaded(){
  console.log('contact form submission handler loaded successfully');
  var form = document.getElementById('BookNow');
  form.addEventListener('submit', handleFormSubmit, false);
};// End `Loaded`

document.addEventListener('DOMContentLoaded', loaded, false);
