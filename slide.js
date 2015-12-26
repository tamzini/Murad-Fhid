
// ============ slide show =======

 $(function(){
 	var activeText = $(".activeText");



	setInterval(function(){
   $(".slide ul").delay(3000).animate({marginLeft:"-800"},2000,function(){
 			$(".slide li:last").after($(".slide li:first"));
 			$(this).css("marginLeft","0px");

 			/*var currentItem = $(".slide li.active");
            var nextItem = currentItem.next('li');

            currentItem.removeClass("active");
            nextItem.addClass("active");

            var nextText = nextItem.find('p').first().text();
            activeText.text(nextText);*/
 		});

             
	},500);
}); 


 /* $(function(){

	setInterval(function(){
   $(".slide ul").animate({marginLeft:"-300"},2000,function(){
 			$(".slide li:last").after($(".slide li:first"));
 			$(this).css("marginLeft","0px");
 			

 			para= $(".slide li p").text() ;
            $(".para1").text(para);
 		});
	},3000);
}); 
*/
// === End of slide show ====