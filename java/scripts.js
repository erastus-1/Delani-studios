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
     $(".card-img2").click(function(){
     $("#pro").show();
  });
     $(".card-img3").click(function(){
     $("#pro").show();
  });
     $(".card-img4").click(function(){
     $("#pro").show();
  });
     $(".card-img5").click(function(){
     $("#pro").show();
  });
     $(".card-img6").click(function(){
     $("#pro").show();
  });
     $(".card-img7").click(function(){
     $("#pro").show();
  });
     $(".card-img8").click(function(){
     $("#pro").show();
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

