$(document).ready(function () {
   $("#design-icon").click(function () {
      $("#design-icon").fadeToggle(1000);
      $("#design-p").fadeToggle(1000);
   });

   $("#design-p").click(function () {
      $("design-p").fadeToggle(1000);
      $("design-icon").fadeToggle(1000);
   });
   $("#development-icon").click(function () {
      $("#development-icon").fadeToggle(1000);
      $("#development-p").fadeToggle(1000);
   });
   $("#development-p").click(function () {
      $("#development-p").fadeToggle(1000);
      $("#development-icon").fadeToggle(1000);
   });
   $("#management-icon").click(function () {
      $("#management-icon").fadeToggle(1000);
      $("#management-p").fadeToggle(1000);
   });
   $("#management-p").click(function () {
      $("#management-p").fadeToggle(1000);
      $("#management-icon").fadeToggle(1000);
   });

});
$(document).ready(function () {
   $(".img1").mouseover(function () {
      $(".project1").show();
   });
   $(".img1").mouseout(function () {
      $(".project1").hide();
   });
   $(".img2").mouseover(function () {
      $(".project2").show();
   });
   $(".img2").mouseout(function () {
      $(".project2").hide();
   });
   $(".img3").mouseover(function () {
      $(".project3").show();
   });
   $(".img3").mouseout(function () {
      $(".project3").hide();
   });
   $(".img4").mouseover(function () {
      $(".project4").show();
   });
   $(".img4").mouseout(function () {
      $(".project4").hide();
   });
   $(".img5").mouseover(function () {
      $(".project5").show();
   });
   $(".img5").mouseout(function () {
      $(".project5").hide();
   });
   $(".img6").mouseover(function () {
      $(".project6").show();
   });
   $(".img6").mouseout(function () {
      $(".project6").hide();
   });
   $(".img7").mouseover(function () {
      $(".project7").show();
   });
   $(".img7").mouseout(function () {
      $(".project7").hide();
   });
   $(".img8").mouseover(function () {
      $(".project8").show();
   });
   $(".img8").mouseout(function () {
      $(".project8").hide();
   });
});

function feedback(myform) {
   var name = document.forms["feedback"]["name"].value;
   var email = document.forms["feedback"]["email"].value;
   var message = document.forms["feedback"]["message"].value;
   alert(
      " Your subscription has successfully been received thank you for your subscription! "
   );
}
