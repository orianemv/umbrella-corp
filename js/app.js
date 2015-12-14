$(function() {
	// Slider
	var i = 0,
		img = $("#image_slider");

	function defil(){	
		setTimeout(function() {
			if(i < 2) {
				i++;
			} else {
				i = 0;
			}
			var ref = "img/image_accueil_" + i + ".jpg";
			img.fadeOut(1000, function() {
				$(this).attr("src", ref);
			}).fadeIn(1500);
			defil();
		}, 7000);
	}
	defil();
	
	//Boutons de nav
	$("nav li").hover(function() {
		$(this).css({
			backgroundColor : "rgba(87,2,2,0.8)",
			border : "1px solid black",
			boxShadow : "1px 1px 1px black",
		});
	}, function() {
		$(this).css({
			backgroundColor : "",
			boxShadow : "",
			border : "",
		});
	});
});