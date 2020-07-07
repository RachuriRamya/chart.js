jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});




});

$(document).ready( function () {

  var ctx = $("#bar-chartcanvas");


  
    var data = {
      labels : ["match1", "match2", "match3", "match4", "match5"],
      datasets : [
           {

        
              label : "TeamA Score",
              data : [10, 50, 25, 70, 40],
              backgroundColor : [
                "rgba(10, 20, 30, 0.3)",
                "rgba(10, 20, 30, 0.3)",
                "rgba(10, 20, 30, 0.3)",
                "rgba(10, 20, 30, 0.3)",
                "rgba(10, 20, 30, 0.3)",
              ],
           
               borderColor : [
                "rgba(10, 20, 30, 1)",
                "rgba(10, 20, 30, 1)",
                "rgba(10, 20, 30, 1)",
                "rgba(10, 20, 30, 1)",
                "rgba(10, 20, 30, 1)",
              ],
               
               borderWidth : 1
          },
          {

             label : "TeamB Score",
             data : [20, 35, 40, 60, 50],
             backgroundColor : [
              "rgba(50, 150, 250, 0.3)",
              "rgba(50, 150, 250, 0.3)",
              "rgba(50, 150, 250, 0.3)",
              "rgba(50, 150, 250, 0.3)",
              "rgba(50, 150, 250, 0.3)",
              ],
              borderColor : [
               "rgba(50, 150, 250, 1)",
               "rgba(50, 150, 250, 1)",
               "rgba(50, 150, 250, 1)",
               "rgba(50, 150, 250, 1)",
               "rgba(50, 150, 250, 1)",
           ],
           borderWidth : 1

          }

         ]



    };

    var options = {
      title : {
        display : true,
        position : "top",
        text : "Bar Graph",
        fontSize : 18,
        fontColor : "#111"
      },
      legend : {
        display : true,
        position : "bottom"
      },
      scales : {
        yAxes : [{
          ticks : {
            min : 0
          }
        }]
      }
    };

  var chart = new Chart( ctx, {
    type : "bar",
    data : data,
    options : options
  });

});

