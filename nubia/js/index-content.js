
	
	
	
	
	
$(function(){
	$.getJSON("../json/index.json",function(data){

			
			
				$('#divq').html(data[0].title);
				
			
	})
})