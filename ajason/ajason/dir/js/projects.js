
function updateDim(){
	$('.projectTable').each(function(i, obj) {
    	obj.style.height = obj.offsetWidth*1.15+"px";
	});

}
$(window).resize(function(){
    updateDim();
}); 

updateDim();