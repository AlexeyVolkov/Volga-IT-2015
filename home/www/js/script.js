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
 	/*
		http://www.w3schools.com/tags/att_input_pattern.asp
		http://jsfiddle.net/Daniel_Hug/wDx62/
 	*/
 	/*$("#myModal form").validate({
 		debug: true,
 		rules: {
 			inputName:{
 				required: true,
 				nowhitespace: true,
 				letterswithbasicpunc: true,
 				range: [1, 64]
 			},
 			inputSurname:{
 				required: true,
 				nowhitespace: true,
 				letterswithbasicpunc: true,
 				range: [1, 64]
 			},
 			inputEmail:{
 				required: true,
 				range: [5, 128],
 				email: true
 			},
 			inputPass1:{
 				required: true,
 				range: [8, 32]
 			},
 			inputPass2:{
 				required: true,
 				range: [8, 32],
 				equalTo: "#inputPass1"
 			}
 		},
 		submitHandler: function(form){
 			$('#myModal').modal('hide');
  			$("#myModal2").modal('show');
 		}
 	});*/
});