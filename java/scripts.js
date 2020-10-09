$(document).ready(function() {
   $("#design-icon").click(function(){
     $("#design-icon").fadeToggle();
     $("#design-p").fadeToggle();
 });

  $("#design-p").click(function(){
     $("design-p").fadeToggle();
     $("design-icon").fadeToggle();
 });
  $("#development-icon").click(function(){
      $("#development-icon").fadeToggle();
      $("#development-p").fadeToggle();
  });
  $("#development-p").click(function(){
    $("#development-p").fadeToggle();
    $("#development-icon").fadeToggle();
  });
  $("#management-icon").click(function(){
      $("#management-icon").fadeToggle();
      $("#management-p").fadeToggle();
  });
  $("#management-p").click(function(){
    $("#management-p").fadeToggle();
    $("#management-icon").fadeToggle();
});
  
});
$(document).ready(function() {
     $(".card-img1").mouseover(function(){
     $("#pro").show();
  });
     $(".card-img1").mouseout(function(){
     $("#pro").hide();
 });
     $(".card-img2").mouseover(function(){
     $("#pro").show();
  });
     $(".card-img2").mouseout(function(){
     $("#pro").hide();
 });
     $(".card-img3").mouseover(function(){
     $("#pro").show();
   });
     $(".card-img3").mouseout(function(){
     $("#pro").hide();
   });
     $(".card-img4").mouseover(function(){
     $("#pro").show();
   });
     $(".card-img4").mouseout(function(){
     $("#pro").hide();
  });
     $(".card-img5").mouseover(function(){
     $("#pro").show();
  });
     $(".card-img5").mouseout(function(){
     $("#pro").hide();
  });
     $(".card-img6").mouseover(function(){
     $("#pro").show();
  });
     $(".card-img6").mouseout(function(){
     $("#pro").hide();
  });
     $(".card-img7").mouseover(function(){
     $("#pro").show();
  });
     $(".card-img7").mouseout(function(){
     $("#pro").hide();
  });
     $(".card-img8").mouseover(function(){
     $("#pro").show();
  });
     $(".card-img8").mouseout(function(){
     $("#pro").hide();
  });

});

// $(document).ready(function() {
//     $("#myform").submit(function(event) {
//       var myform = ["development-icon", "development-p", "management-icon", "management-p", "design-icon", "design-p"];

//       myform.forEach(function(myform) {
//         var userInput = $("input#" + myform).val();
//         $("." + myform).text(userInput);
//       });

//       $("#submit").show();

//       event.preventDefault();
//     });
//   });

