
  var posY,boxUtama, box1,box2,box3,img3;

  function Paralax() {
    posY = window.pageYOffset;
    boxUtama=document.getElementById('Text');
    boxUtama.style.top = posY*.17+'px';
    box1 = document.getElementById('Text1');
    box1.style.bottom = posY*.19+'px';
    box2 = document.getElementById('Text2');
    box2.style.bottom = posY*.28+'px';
    box3 = document.getElementById('Text3');
    box3.style.bottom = posY*.3+'px';
    img3 = document.getElementById('BoxImage3');
    img3.style.bottom = posY*.35+'px';
  }

  window.addEventListener('scroll',Paralax);


  $(window).on('scroll',function () {
    if($(window).scrollTop()){
      $('header').addClass('sticky');
    }
    else {
      $('header').removeClass('sticky')
    }
  })
