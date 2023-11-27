$(document).ready(function() {
    $("#registerLink").click(function( event ){
        event.preventDefault();
        $(".overlay1").fadeToggle("fast");
      });

    $(".close1").click(function(){
        $(".overlay1").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27 && $(".overlay1").css("display") != "none" ) { 
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
});
