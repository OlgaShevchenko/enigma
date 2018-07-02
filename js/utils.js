$(document).ready(function(){		
	
		
	
	
	$("#header  .menu_trigger").click(function(){	
			$('#header .menu').slideToggle();	
				$('#header .menu_trigger i').toggleClass('hid');		
			});	
		$("#header .menu a").click(function(){					
			$('#header .menu').slideUp();	
			$('#header .menu_trigger i').toggleClass('hid');		
		});	
	
	
});		
