
$(window).on('scroll',function () {

  if($(window).scrollTop()){
    $('.container').addClass('sticky');
    $("nav a").css("color","#737373");
  }
  else {
    $('.container').removeClass('sticky')
    $("nav a").css("color","white");
  }
})


var posY,boxUtama, box1,box2,box3;

function Paralax() {
  posY = window.pageYOffset;
  box1 = document.getElementById('D');
  box1.style.bottom = posY*.4+'px';
  boxUtama=document.getElementById('A');
  boxUtama.style.top = posY*.5+'px';
  box3 = document.getElementById('Text3');
  box3.style.bottom = posY*.3+'px';
}

window.addEventListener('scroll',Paralax);
