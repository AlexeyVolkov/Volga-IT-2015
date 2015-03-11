$( document ).ready(function() {
 
    $("#open-video").click(function() {
    	$(".video").fadeIn('slow');
    });

    $('#myForm').submit(function () {
    	$('#myModal').modal('hide');
  		$("#myModal2").modal('show');
	});
 
});