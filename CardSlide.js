
      $(document).ready(function () {
              flag=1;
              $(".next2").click(function () {
                if (flag==0) {
                  $(".side1").css("z-index","10");
                  $(".side2").css("z-index","9");
                  $(".side3").css("z-index","9");
                  $(".side1").css("transform","translateX(0px) scale(1.5)");
                  $(".side2").css("transform","translateX(-300px) scale(1)");
                  $(".side3").css("transform","translateX(300px)");
                  flag=1;}
                else if (flag==1) {

                    $(".side3").css("z-index","10");
                    $(".side1").css("z-index","9");
                    $(".side2").css("z-index","9");
                    $(".side3").css("transform","translateX(0px) scale(1.5)");
                    $(".side1").css("transform","translateX(-300px) scale(1)");
                    $(".side2").css("transform","translateX(300px)");
                    flag=2;
                }
                else if (flag==2) {

                    $(".side2").css("z-index","10");
                    $(".side3").css("z-index","9");
                    $(".side1").css("z-index","9");
                    $(".side2").css("transform","translateX(0px) scale(1.5)");
                    $(".side3").css("transform","translateX(-300px) scale(1)");
                    $(".side1").css("transform","translateX(300px)");
                    flag=0;
                }
              })
            })
