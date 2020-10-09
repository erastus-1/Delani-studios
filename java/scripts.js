$(document).ready(function() {
   $("#design-icon").click(function(){
     $("#design-icon").toggle();
     $("#design-p").toggle();
 });

  $("#design-p").click(function(){
     $("design-p").toggle();
     $("design-icon").toggle();
 });
  $("#development-icon").click(function(){
      $("#development-icon").toggle();
      $("#development-p").toggle();
  });
  $("#development-p").click(function(){
    $("#development-p").toggle();
    $("#development-icon").toggle();
});
  $("#management-icon").click(function(){
      $("#management-icon").toggle();
      $("#management-p").toggle();
  });
  $("#management-p").click(function(){
    $("#management-p").toggle();
    $("#management-icon").toggle();
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

