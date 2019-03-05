$(document).ready(function () {
 	$("#log").attr('disabled',true);
 	
 	$("form").keyup(function () {
 		$("#log").attr('disabled',true);
 		
	    var email = $('#mail').val();
		var password = $('#pass').val();		
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

	
		if (!(email == "" || password == "" || password.length < 6)) { 
			if (regex.test(email)) { 
				// To Enable Submit Button 
				$("#log").removeAttr('disabled',false); 
			}
		}
	});

	$('#log').click(function () {
		// body...
		alert("Login Successfully");
	});
});