
$( document ).ready(function() {

$("li.home").click(function () {
    $("#home").show();
    $("#szolg,#part,#cont").hide();
    $("li").removeClass("active");
     $(this).addClass("active");
});

$("li.szolg").click(function () {
    $("#szolg").show();
    $("#home,#part,#cont").hide();
     $("li").removeClass("active");
     $(this).addClass("active");
});

$("li.part").click(function () {
    $("#part").show();
    $("#szolg,#home,#cont").hide();
     $("li").removeClass("active");
     $(this).addClass("active");
});

$("li.cont").click(function () {
    $("#cont").show();
    $("#szolg,#home,#part").hide();
     $("li").removeClass("active");
     $(this).addClass("active");
});

    $('.slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.slideshow :first-child')
      	 .hide()
         .next('img')
         .show()
         .end()
         .appendTo('.slideshow');
    	}, 3000
    );
    });