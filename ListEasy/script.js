var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
    var text = $("#todo").val(),
        html = template(text);
        
    $(".list").append(html);
    $("#todo").val("");
    return false;  
  });
  
  //this code bides each star individually from the original html file
//   $(".glyphicon-star").click(function() {
//       $(this).toggleClass("active");
//       });

//this command will bide the star for all the list items on html or the ones created in the list item

    $(".list").on("click",".glyphicon-star", function() {
        $(this).toggleClass("active");
        });
        
    $(".list").on("click",".glyphicon-remove", function() {
        $(this).closest("p").remove();
        // you can create variables and call the var to remove it
        // var $listItem = $(this).closest("p");
        // $listItem.remove():
        
        });
};

$(document).ready(main);