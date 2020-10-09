$(document).ready(function() {
   $("#design-icon").click(function(){
     $("#design-icon").show();
     $("#design-p").hide();
 });

  $("#design-icon").click(function(){
     $("design-icon").show();
     $("design-p").hide();
 });
  $("#development-icon").click(function(){
      $("#development-icon").show();
      $("#development-p").hide();
  });
  $("#management-icon").click(function(){
      $("#management-icon").show();
      $("#management-p").hide();
  });

  
});

$(document).ready(function() {
    $("#myform").submit(function(event) {
      var myform = ["development-icon", "development-p", "management-icon", "management-p", "design-icon", "design-p"];

      myform.forEach(function(myform) {
        var userInput = $("input#" + myform).val();
        $("." + myform).text(userInput);
      });

      $("#submit").show();

      event.preventDefault();
    });
  });

