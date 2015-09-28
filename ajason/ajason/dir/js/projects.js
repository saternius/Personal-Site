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

var Project = function(){
	this.name = "Project Name";
	this.date = "January 2015";
	this.smallDesc = "A small quick description of the project";
	this.desc = "A more in depth description on the project that you built, including the stack that was used, in depth objectives, UI design choices and challenges overcome and lessons that were learned as a result of it's development.";
	this.stack = ['NodeJS', 'MongoDB'];
	this.mainScreenshot = "images/projectExample/mainScreen.png";
	this.tags = ['Hackathon','Mobile','Java', 'Misc'];

	//OPTIONAL: this.screenshots = ["images/projectExample/mainScreen.png", "images/projectExample/otherScreen.png"];	
	//OPTIONAL: this.link = "http://myrighttoplay.com";
	//OPTIONAL: this.embed = ['swf','http://myrighttoplay.com/blah','550','400']; //[type, link, width, height]
}

var SpaceDexterity = function(){
	this.name = "Space Dexterity";
	this.date = "October 2010";
	this.smallDesc = "It all began with a simple flash game.";
	this.desc = "Space Dexterity was my first start to finish project. The amount of raw pleasure endured in the 3 days of developing it helped kickstart my passion of a lifetime of programming. I posted it on online and embedded Mochi onto it and since 2010 has gotten well over 200,000 plays.";
	this.stack = ['Flash'];
	this.mainScreenshot = 'images/projectShots/SpaceDexterity/GamePlay1.png'
	this.screenshots = ["images/projectShots/SpaceDexterity/GamePlay1.png", "images/projectShots/SpaceDexterity/Menu.png"];
	this.embed = ['swf','images/projectShots/SpaceDexterity/swf/space-dexterity.swf','550','400']; 
}

var TestYourInnerGamer = function(){
	this.name = "Test Your Inner Gamer";
	this.date = "November 2010";
	this.smallDesc = "A game composed of several minigames in order to get experience in implementing various gaming mechanics";
	this.desc = "Test Your Inner Gamer was the second game I created that was composed fo several minigames in order to get a hang of implementing various gaming mechanics and strengthen my overall programming abilities.";
	this.stack = ['Flash'];
	this.mainScreenshot = 'images/projectShots/TestYourInnerGamer/game4.png'
	this.screenshots = ["images/projectShots/TestYourInnerGamer/Menu.png", 
						"images/projectShots/SpaceDexterity/game1.png",
						"images/projectShots/SpaceDexterity/game2.png",
						"images/projectShots/SpaceDexterity/game3.png",
						"images/projectShots/SpaceDexterity/game4.png",
						"images/projectShots/SpaceDexterity/game5.png",
						"images/projectShots/SpaceDexterity/game6.png",
						"images/projectShots/SpaceDexterity/game7.png",
						];
	this.embed = ['swf','images/projectShots/TestYourInnerGamer/swf/tyig.swf','550','400']; 
}

var SpaceFishers = function(){
	this.name = "Space Fishers";
	this.date = "Febuary 2011";
	this.smallDesc = "Asteroids with a twist. Be a space entrepreneur and harvest space minerals by blowing up asteroids!";
	this.desc = "Space fishers was the first programming project that used more advanced forms of object orientation such as inheritances and having MovieClips operate independently within the environment.";
	this.stack = ['Flash'];
	this.mainScreenshot = 'images/projectShots/SpaceFishers/game1.png'
	this.screenshots = ["images/projectShots/SpaceFishers/GameMenu.png", 
						"images/projectShots/SpaceFishers/menu.png",
						"images/projectShots/SpaceFishers/game1.png"
						];
	this.embed = ['swf','images/projectShots/SpaceFishers/swf/space-fishers.swf','600','600']; 
}


var CrazyCrystallizedCalamity = function(){
	this.name = "Crazy Crystallized Calamity";
	this.date = "May 2011";
	this.smallDesc = "Simple time-grinder game in which you save a burning town by throwing a giant snowball at it.";
	this.desc = "Crazy Crystallized Calamity is essentially a half-finished time wasting flash game that gave me great insights in what and what not to do in game development. There are a ton of things wrong with it and I had contemplation whether to post it or not but I guess its worth talking about since it always good to talk about your failures and what you learned from them. Despite the obvious glitches the game is riddled with, the main attribute this game suffers with most of all is proper design. For one there is little information about what is going on except for the nice animation at the beginning, there is no indication of how big the snowball is growing, the hitboxes for the clouds are attrocious, it has little interactivity, and overall the game lacks any real enjoyable experience. Most of the issues lay within the fact that I moved on to other projects mid production, and didn't give it the time it needed to be good.";
	this.stack = ['Flash'];
	this.mainScreenshot = 'images/projectShots/CCC/game1.png'
	this.screenshots = ["images/projectShots/SpaceFishers/Menu.png", 
						"images/projectShots/SpaceFishers/GameMenu.png",
						"images/projectShots/SpaceFishers/game1.png",
						"images/projectShots/SpaceFishers/game2.png"
						];
	this.embed = ['swf','images/projectShots/CCC/swf/ccc.swf','600','600']; 
}

var FloatingBoxesOfWonder = function(){
	this.name = "Floating Boxes of Wonder";
	this.date = "January 2012";
	this.smallDesc = "Simple time-grinder game in which you save a burning town by throwing a giant snowball at it.";
	this.desc = "Crazy Crystallized Calamity is essentially a half-finished time wasting flash game that gave me great insights in what and what not to do in game development. There are a ton of things wrong with it and I had contemplation whether to post it or not but I guess its worth talking about since it always good to talk about your failures and what you learned from them. Despite the obvious glitches the game is riddled with, the main attribute this game suffers with most of all is proper design. For one there is little information about what is going on except for the nice animation at the beginning, there is no indication of how big the snowball is growing, the hitboxes for the clouds are attrocious, it has little interactivity, and overall the game lacks any real enjoyable experience. Most of the issues lay within the fact that I moved on to other projects mid production, and didn't give it the time it needed to be good.";
	this.stack = ['Flash'];
	this.mainScreenshot = 'images/projectShots/CCC/game1.png'
	this.screenshots = ["images/projectShots/SpaceFishers/Menu.png", 
						"images/projectShots/SpaceFishers/GameMenu.png",
						"images/projectShots/SpaceFishers/game1.png",
						"images/projectShots/SpaceFishers/game2.png"
						];
	this.embed = ['swf','images/projectShots/CCC/swf/ccc.swf','600','600']; 
}

var Sample = function(){
	this.name = "";
	this.date = "";
	this.smallDesc = "";
	this.desc = "";
	this.stack = [''];
	this.mainScreenshot = ''
}


/*
PROJECTS TODO:
	✓Space Dexterity
	✓Test Your Inner Gamer
	✓Space Fishers
	✓CCC
	Floating Boxes of Wonder
	
	Simulator_237/Simulator_238
	Space Dexterity 2
	
	Loaded
	TakeOut
	Arbitrio
	
	MyRighttoplay
	ZombieIO
	
	GHistory Scrapper
	MrGameAndWatch
	Stela
	UpTalk
	cobbleStone
	lawyerUp
	Corvisa
	Frizzle
	Downlow'd
	
	Lets Graduate
	IntelliWheels
	Cublet

	This Website
*/

// In later dev
/*
Yahtzee
Debate
SuperOrganDonor
ROYGBIV - FLASH
ROYGBIV - JAVA
Sobriety Test
Valintine/Valintine Mod
Success
*/