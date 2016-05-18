var $homeMenuDown = false;	
var $otherMenuDown = false;

var main = function() {

$(window).load(function(){
	$("#loader").fadeOut("slow");
});



//Resizes jumbotron based on window

	$('.jumbotron').css({'height':($(window).height())
	});

	$(window).resize(function(){
		$('.jumbotron').css({'height':($(window).height())
	});
	});



//Toggles menu, home text appearance, and night stars appearance, for home page

	$('.home-menu-activate').click(function(){

		if ($homeMenuDown) {
			$('.menu').fadeOut('slow');
			$('.home-headline').fadeIn('fast');
			$('#jumbo-stars').fadeOut('fast');
			$homeMenuDown=false;

		} else {
			$('.menu').css("opacity", ".75");
			$('.menu').fadeIn(900);
			$('.home-headline').fadeOut('fast');
			$('#jumbo-stars').fadeIn('slow');
			$homeMenuDown=true;
		}
	});


//Toggles menu, and opacity of non-main menus

$('.map-menu-link, .contact-menu-link, #about-tab, #contact-tab').click(function(){

		if ($otherMenuDown) {
			$('.menu').fadeOut('slow');
			$('.map-menu-link').css("color", "#ededf0");
			$otherMenuDown=false;

		} else {
			$('.menu').css("opacity", ".85");
			$('.menu').fadeIn('slow');
			$('.map-menu-link').css("color", "white");
			$otherMenuDown=true;
	}
	});


//Shows text on about icon hover
$('.about-icon-link').mouseenter(function(){
	$(this).children('p').show('fast');
});

$('.about-icon-link').mouseleave(function(){
	$(this).children('p').hide('fast');
});


//Smoothly scrolls to anchor
$('#skillslink, #bikelink').click(function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top-50
	}, 900);
	return false;
});


//Toogles skills drop on hover
$('.skills-block-1, .skills-block-2').hover(function(){
	$(this).children('div').slideToggle('slow');
	$(this).children('p').slideToggle('fast');
});




//Opens photo panel when a state is clicked
	$('.state').click(function(){

		var $stateId = $(this).attr('id');

		if($stateId == "idaho") {
			$(".state-img").attr("src", "Images/idaho.JPG");
			$(".caption").html("Sandpoint, Idaho");
		} else if ($stateId == "montana") {
			$(".state-img").attr("src", "Images/montana.jpg");
			$(".caption").html("Glacier National Park, Montana");
		} else if ($stateId == "northdakota") {
			$(".state-img").attr("src", "Images/northdakota.JPG");
			$(".caption").html("Teddy Roosevelt National Park, North Dakota");
		} else if ($stateId == "minnesota") {
			$(".state-img").attr("src", "Images/minnesota.JPG");
			$(".caption").html("Crooked Creek, Minnesota");
		} else if ($stateId == "iowa") {
			$(".state-img").attr("src", "Images/iowa.JPG");
			$(".caption").html("Oxford Junction, Iowa");
		} else if ($stateId == "illinois") {
			$(".state-img").attr("src", "Images/illinois.JPG");
			$(".caption").html("Ashkum, Illinois");
		} else if ($stateId == "indiana") {
			$(".state-img").attr("src", "Images/indiana.JPG");
			$(".caption").html("Lancaster, Indiana");
		} else if ($stateId == "ohio") {
			$(".state-img").attr("src", "Images/ohio.JPG");
			$(".caption").html("Bowling Green, Ohio");
		} else if ($stateId == "newyork") {
			$(".state-img").attr("src", "Images/newyork.JPG");
			$(".caption").html("Niagara Falls, New York");
		} else if ($stateId == "vermont") {
			$(".state-img").attr("src", "Images/vermont.JPG");
			$(".caption").html("Thetford, Vermont");
		} else if ($stateId == "newhampshire") {
			$(".state-img").attr("src", "Images/newhampshire.JPG");
			$(".caption").html("Conway, New Hampshire");
		} else if ($stateId == "maine") {
			$(".state-img").attr("src", "Images/maine.JPG");
			$(".caption").html("Belfast, Maine");
		} else if ($stateId == "washington") {
			$(".state-img").attr("src", "Images/washington.JPG");
			$(".caption").html("Washington Pass, Washington");
		};


		$(".state-panel").fadeIn('slow');
	});


//Closes photo panel when screen is clicked
	$(".state-panel").click(function(){
		$(".state-panel").fadeOut('slow');
	});



};

$(document).ready(main);