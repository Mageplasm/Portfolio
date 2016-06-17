$(document).ready(function(){
	$('#full_page').fullpage({
		    sectionsColor: ['#D8D8D8', '#D8D8D8', '#D8D8D8', '#D8D8D8', '#D8D8D8'],
			anchors: ['first_section', 'second_section', 'third_section', 'fourth_section', 'fifth_section'],
			menu: '#menu'
		}); 

	$(".fancybox").fancybox(
		{'width':850,
         'height':1100,
         'autoSize' : false,
     	 'type':'iframe'});
}); 