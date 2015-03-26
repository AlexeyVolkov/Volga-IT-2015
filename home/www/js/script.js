$( document ).ready(function() {
 
  $("#open-video").click(function() {
  	$(".video").fadeIn('slow');
  });
 
 	$("#myModal").on('show.bs.modal', function() {
 		$(".header, .middle, .map, .about, .video, .orgs, .footer").addClass('blur');
 	});
 	$("#myModal").on('hide.bs.modal', function() {
 		$(".header, .middle, .map, .about, .video, .orgs, .footer").removeClass('blur');
 	});
	$("#myForm").submit(function(event) {
		event.preventDefault();
		var pass1 = $("#inputPass1").val();
		var pass2 = $("#inputPass2").val();
		if(pass1 == pass2){
			$("#myModal").fadeOut('slow');
			$("#myModal2").fadeIn('slow');
		}
		else
			alert("Error");
	});
});