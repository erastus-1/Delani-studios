// $(document).ready(function() {

// }

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