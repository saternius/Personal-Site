var prevLink;
function updateDim(){
	$('.projectTable').each(function(i, obj) {
    	obj.style.height = obj.offsetWidth*1.15+"px";
	});

}
$(window).resize(function(){
    updateDim();
}); 

updateDim();

function displayProjectsOf(str){
	if(prevLink){
		prevLink.style.fontFamily = "GothamBook";
	}
	var linkElement = document.getElementById("Proj"+str);
	linkElement.style.fontFamily = "GothamBold";
	prevLink = linkElement;
	switch(str){
		case "Recent":
			break;

	}
}


displayProjectsOf('Recent');

//////////////////////////////////////////PROJECT DATA////////////////////////////////////////
/*
	NOTES: This can be transfered to be reperesented in JSON, but I personally prefer this syntax
	TAGS: Recent, WebDev, Gaming, WatchApp, Mobile, Hackathon, Javascript, C, Java, NodeJS, PHP, Flash, Canvas, Misc
*/

var Project = function(mc){
	this.name = "Project Name";
	this.date = "January 2015";
	this.smallDesc = "A small quick description of the project";
	this.desc = "A more in depth description on the project that you built, including the stack that was used, in depth objectives, UI design choices and challenges overcome and lessons that were learned as a result of it's development.";
	this.mainScreenshot = "images/projectExample/mainScreen.png";
	this.tags = ['Hackathon','Mobile','Java', 'Misc'];
	//OPTIONAL: this.screenshots = ["images/projectExample/mainScreen.png", "images/projectExample/otherScreen.png"];	
	//OPTIONAL: this.link = "http://myrighttoplay.com";
	//OPTIONAL: this.embed = ['swf','http://myrighttoplay.com/blah','550','400']; //[type, link, width, height]
}

/*
PROJECTS TODO:
	Space Dexterity
	Test Your Inner Gamer
	ROYGBIV
	Space Fishers
	CCC
	Floating Boxes of Wonder
	Sobriety Test
	Chibi Creation
	Simulator_237
	Space Dexterity 2
	Valintine/Valintine Mod
	Success
	ROYGBIV - JAVA
	Loaded
	TakeOut
	Arbitrio
	Simulator_238
	MyRighttoplay
	ZombieIO
	SuperOrganDonor
	GHistory Scrapper
	MrGameAndWatch
	Stela
	UpTalk
	cobbleStone
	lawyerUp
	Corvisa
	Frizzle
	Downlow'd
	Yahtzee
	Lets Graduate
	IntelliWheels
	Cublet
	Debate
	This Website
*/