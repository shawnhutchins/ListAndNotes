"use strict"

$document.ready(function(){
  $.ajax({url: "http://localhost:8080/notes/588a1f4bd8f81a68ac36ffa1", success: function(result){
    $(".note").value(result);
  }});
});
