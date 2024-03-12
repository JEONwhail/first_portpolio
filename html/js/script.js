$(document).ready(function(){



  $(".search_d").click(function(){
    $(".search_box").removeClass("disN");
    $(".search_box").addClass("disU");
  });

  $(".closer").click(function(){
    $(".search_box").removeClass("disU");
    $(".search_box").addClass("disN");
  });





 $('.close_box').click(function(){
   $('.modal_wrap').addClass('on');
 });

 $('.madal_bg').click(function(){
  $('.modal_wrap').addClass('on');
 });



  $("#queston .dl_box .faq").click(function(){
    $("+.qaf",this).slideDown("fast").siblings("dd").slideUp("fast");
  });

  $("#queston .dl_box .qaf").click(function(){
    $(this).slideUp(200);
  });


  $(".btn_01").click(function(){
    $(".box1").removeClass("disN");
    $(".box1").addClass("disB");
  });

  $(".btnn_1").click(function(){
    $(".box1").removeClass("disB");
    $(".box1").addClass("disN");

  });

  $(".btn_02").click(function(){
    $(".box2").removeClass("disN");
    $(".box2").addClass("disB");
  });

  $(".btnn_2").click(function(){
    $(".box2").removeClass("disB");
    $(".box2").addClass("disN");

  });

  $(".btn_03").click(function(){
    $(".box3").removeClass("disN");
    $(".box3").addClass("disB");
  });

  $(".btnn_3").click(function(){
    $(".box3").removeClass("disB");
    $(".box3").addClass("disN");

  });

  $(".btn_04").click(function(){
    $(".box4").removeClass("disN");
    $(".box4").addClass("disB");
  });

  $(".btnn_4").click(function(){
    $(".box4").removeClass("disB");
    $(".box4").addClass("disN");

  });





});
