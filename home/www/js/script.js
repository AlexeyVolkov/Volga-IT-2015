$( document ).ready(function() {
 
    $("#open-video").click(function() {
    	$(".video").fadeIn('slow');
    });

    /*$('#myForm').submit(function () {
    	$('#myModal').modal('hide');
  		$("#myModal2").modal('show');
	});*/
 
 	$("#myModal").on('show.bs.modal', function() {
 		$(".header, .middle, .map, .about, .video, .orgs, .footer").addClass('blur');
 	});
 	$("#myModal").on('hide.bs.modal', function() {
 		$(".header, .middle, .map, .about, .video, .orgs, .footer").removeClass('blur');
 	});

 	$("#myModal form").validate();
});