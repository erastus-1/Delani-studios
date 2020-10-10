$(document).ready(function() {
   $("#design-icon").click(function(){
     $("#design-icon").fadeToggle(1000);
     $("#design-p").fadeToggle(1000);
 });

  $("#design-p").click(function(){
     $("design-p").fadeToggle(1000);
     $("design-icon").fadeToggle(1000);
 });
  $("#development-icon").click(function(){
      $("#development-icon").fadeToggle(1000);
      $("#development-p").fadeToggle(1000);
  });
  $("#development-p").click(function(){
    $("#development-p").fadeToggle(1000);
    $("#development-icon").fadeToggle(1000);
  });
  $("#management-icon").click(function(){
      $("#management-icon").fadeToggle(1000);
      $("#management-p").fadeToggle(1000);
  });
  $("#management-p").click(function(){
    $("#management-p").fadeToggle(1000);
    $("#management-icon").fadeToggle(1000);
});
  
});
$(document).ready(function() {
     $(".card-img1").mouseover(function(){
     $("#pro").show();
  });
     $(".card-img1").mouseout(function(){
     $("#pro").show();
 });
     $(".card-img2").mouseover(function(){
     $("#project2").show();
  });
     $(".card-img2").mouseout(function(){
     $("#project2").hide();
 });
     $(".card-img3").mouseover(function(){
     $("#project3").show();
   });
     $(".card-img3").mouseout(function(){
     $("#pro3").hide();
   });
     $(".card-img4").mouseover(function(){
     $("#project4").show();
   });
     $(".card-img4").mouseout(function(){
     $("#project5").hide();
  });
     $(".card-img5").mouseover(function(){
     $("#project5").show();
  });
     $(".card-img5").mouseout(function(){
     $("#project5").hide();
  });
     $(".card-img6").mouseover(function(){
     $("#project6").show();
  });
     $(".card-img6").mouseout(function(){
     $("#project6").hide();
  });
     $(".card-img7").mouseover(function(){
     $("#project7").show();
  });
     $(".card-img7").mouseout(function(){
     $("#project7").hide();
  });
     $(".card-img8").mouseover(function(){
     $("#project8").show();
  });
     $(".card-img8").mouseout(function(){
     $("#project8").hide();
  });

});

$(document).ready(function() {
    $("#myform").submit(function(event) {
      var myform = ["name", "email", "comment"];

      var userName=document.getElementById("name").value

      if(userName===undefined){
         document.getElementById("show").innerText = ``  
     } else {
         document.getElementById("show").innerText = $(userName)
     }
      $("#submit").show();

      event.preventDefault();
    });
  });

