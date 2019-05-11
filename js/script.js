$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.fixed-action-btn').floatingActionButton({"hoverEnabled": false});
  // Check if print needed
  var searchpath = window.location.search;
  if (searchpath.substring(1) != "") {
    var pairs = searchpath.substring(1).split("&");
    for (var i in pairs) {
      if (pairs[i] != "") {
        var pair = pairs[i].split("=");
        if (pair[0] == "print" && pair[1] == "true") {
          window.print();
          break;
        }
      }
    }
  }
});
window.onafterprint = function(){
  var loc = window.location.href.split("?")[0];
  window.location.href = loc;
}
$(document).bind("keyup keydown", function(e){
    if(e.ctrlKey && e.keyCode == 80){
        clickPrint();
        return false;
    }
});
