
//////////////////////////////////////////PROJECT DATA////////////////////////////////////////
/*
	NOTES: This can be transfered to be reperesented in JSON, but I personally prefer this syntax
*/

var Project = function(){
	this.name = "Project Name";
	this.date = "January 2015";
	this.smallDesc = "A small quick description of the project";
	this.desc = "A more in depth description on the project that you built, including the stack that was used, in depth objectives, UI design choices and challenges overcome and lessons that were learned as a result of it's development.";
	this.mainScreenshot = "images/projectExample/mainScreen.png";

	//OPTIONAL: this.screenshots = ["images/projectExample/mainScreen.png", "images/projectExample/otherScreen.png"];	
	//OPTIONAL: this.link = "http://myrighttoplay.com";
	//OPTIONAL: this.embed = ['swf','http://myrighttoplay.com/blah','550','400']; //[type, link, width, height]
}

var SpaceDexterity = function(){
	this.name = "Space Dexterity";
	this.date = "October 2010";
	this.smallDesc = "It all began with a simple flash game.";
	this.desc = "Space Dexterity was my first start to finish project. The amount of raw pleasure endured in the 3 days of developing it helped kickstart my passion of a lifetime of programming. I posted it on online and embedded Mochi onto it and since 2010 has gotten well over 200,000 plays.";
	this.mainScreenshot = 'images/projectShots/SpaceDexterity/GamePlay1.png'
	this.screenshots = ["images/projectShots/SpaceDexterity/GamePlay1.png", "images/projectShots/SpaceDexterity/Menu.png"];
	this.embed = ['swf','images/projectShots/SpaceDexterity/swf/space-dexterity.swf','550','400']; 
	this.tags = ["Flash","Gaming"];
}

var TestYourInnerGamer = function(){
	this.name = "Test Your Inner Gamer";
	this.date = "November 2010";
	this.smallDesc = "A game composed of several minigames in order to get experience in implementing various gaming mechanics";
	this.desc = "Test Your Inner Gamer was the second game I created that was composed fo several minigames in order to get a hang of implementing various gaming mechanics and strengthen my overall programming abilities.";
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
	this.tags = ["Flash", "Gaming"]; 
}

var SpaceFishers = function(){
	this.name = "Space Fishers";
	this.date = "Febuary 2011";
	this.smallDesc = "Asteroids with a twist. Be a space entrepreneur and harvest space minerals by blowing up asteroids!";
	this.desc = "Space fishers was the first programming project that used more advanced forms of object orientation such as inheritances and having MovieClips operate independently within the environment.";
	this.mainScreenshot = 'images/projectShots/SpaceFishers/game1.png'
	this.screenshots = ["images/projectShots/SpaceFishers/GameMenu.png", 
						"images/projectShots/SpaceFishers/menu.png",
						"images/projectShots/SpaceFishers/game1.png",
						];
	this.embed = ['swf','images/projectShots/SpaceFishers/swf/space-fishers.swf','600','600'];
	this.tags = ["Flash", "Gaming"];  
}


var CrazyCrystallizedCalamity = function(){
	this.name = "Crazy Crystallized Calamity";
	this.date = "May 2011";
	this.smallDesc = "Simple time-grinder game in which you save a burning town by throwing a giant snowball at it.";
	this.desc = "Crazy Crystallized Calamity is essentially a half-finished time wasting flash game that gave me great insights in what and what not to do in game development. There are a ton of things wrong with it and I had contemplation whether to post it or not but I guess its worth talking about since it always good to talk about your failures and what you learned from them. Despite the obvious glitches the game is riddled with, the main attribute this game suffers with most of all is proper design. For one there is little information about what is going on except for the nice animation at the beginning, there is no indication of how big the snowball is growing, the hitboxes for the clouds are attrocious, it has little interactivity, and overall the game lacks any real enjoyable experience. Most of the issues lay within the fact that I moved on to other projects mid production, and didn't give it the time it needed to be good. Despite it's downfalls I had enormous enjoyment creating it and learning about the wonders of game dev.";
	this.mainScreenshot = 'images/projectShots/CCC/game1.png'
	this.screenshots = ["images/projectShots/CCC/game2.png",
						'images/projectShots/CCC/game1.png', 
						"images/projectShots/CCC/GameMenu.png",
						"images/projectShots/CCC/Menu.png"
						];
	this.embed = ['swf','images/projectShots/CCC/swf/ccc.swf','600','600']; 
	this.tags = ["Flash", "Gaming"]; 
}

var FloatingBoxesOfWonder = function(){
	this.name = "Floating Boxes of Wonder";
	this.date = "January 2012";
	this.smallDesc = "Local multiplayer helicopter-like game.";
	this.desc = "Floating Boxes of Wonders was my most successful flash games, recieving over 750,000 views total. More importantly, it encouraged me to learn better programming practices like code decoupling so that I could have dynamic rebindings and functionalities between the players.";
	this.mainScreenshot = 'images/projectShots/FloatingBoxesOfWonder/game2.png'
	this.screenshots = ["images/projectShots/SpaceFishers/Menu.png",
						'images/projectShots/FloatingBoxesOfWonder/game2.png', 
						"images/projectShots/SpaceFishers/game1.png",
						];
	this.embed = ['swf','images/projectShots/CCC/swf/ccc.swf','600','600']; 
	this.tags = ["Flash", "Gaming"]; 
}


var SpaceDexterity2 = function(){
	this.name = "Space Dexterity 2";
	this.date = "January 2012";
	this.smallDesc = "With the impending death of Flash, I decided to just give it one last go and make my final flash game a tribute to my first.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash", "Gaming"]; 
}


var Simulator_237 = function(){
	this.name = "Simulator 237/238";
	this.date = "July 2013/2014";
	this.smallDesc = "Sandbox in which small bots compete for life, and evolve in the process.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png'
	this.tags = ["Flash", "Gaming"]; 
}

var Loaded = function(){
	this.name = "Loaded";
	this.date = "June 2014";
	this.smallDesc = "Hand crafted physics engine implemented in a unique toilet game.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Mobile", "Gaming","Large","Java"]; 
}


var TakeOut = function(){
	this.name = "Loaded";
	this.date = "Febuary 2015";
	this.smallDesc = "See how long you could live eating only one food before having organ failure";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Mobile", "Experimental", "Java", "Hackathon"]; 
}

var Arbitrio = function(){
	this.name = "Arbitrio";
	this.date = "October 2013";
	this.smallDesc = "Interface that allows users to make their own walkthrough adventures, and post them online.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Java", "PHP", "mySQL", "Large"]; 
}

var MyRightToPlay = function(){
	this.name = "Loaded";
	this.date = "December 2010";
	this.smallDesc = "Dynamic portal for flash games all over the web.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WebDev", "Gaming","Flash","Large","PHP","Javascript"]; 
}

var ZombieIO = function(){
	this.name = "ZombieIO";
	this.date = "March 2014";
	this.smallDesc = "Minimalistic online multiplayer game where you survive a zombie swarm";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Canvas", "Gaming","NodeJS","Javascript"]; 
}


var GoogleHistoryScrapper = function(){
	this.name = "Google History Scrapper";
	this.date = "January 2015";
	this.smallDesc = "Script that allows users to get all their google searches in one convinient text file";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS", "Javascript" ,"Experimental"]; 
}

var MrGameAndPebbleWatch = function(){
	this.name = "Mr.Game and PebbleWatch";
	this.date = "March 2014";
	this.smallDesc = "Recreation of the classic nintendo game into the pebble watch";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C"]; 
}

var Stela = function(){
	this.name = "Stela";
	this.date = "Febuary 2014";
	this.smallDesc = "Pebble App that pulls an article from your phone and spritz streams it to your watch";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C","Hackathon"]; 
}

var Uptalk = function(){
	this.name = "UpTalk";
	this.date = "May 2015";
	this.smallDesc = "Mobile app that helps you learn a new language in a new way";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png'
	this.tags = ["Mobile", "C", "Hackathon","Javascript", "Ionic"]; 
}

var CobbleStone = function(){
	this.name = "CobbleStone";
	this.date = "April 2015";
	this.smallDesc = "WarioWare-like multiplayer coop game for the pebble.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C", "Gaming", "NodeJS", "Javascript", "Hackathon"]; 
}

var LawyerUp = function(){
	this.name = "Lawyer Up";
	this.date = "July 2015";
	this.smallDesc = "Oregon Trail -like game aimed to inform the user about good legal health";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Canvas", "Gaming", "Hackathon", "Javascript"]; 
}

var ArbCorvisa = function(){
	this.name = "Arbitrio(Corvisa)";
	this.date = "July 2015";
	this.smallDesc = "Frontend UI for corvisa aimed at non-technical individuals";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS","Javascript", "Hackathon"]; 
}

var Frizzle = function(){
	this.name = "Frizzle";
	this.date = "August 2015";
	this.smallDesc = "Chrome extension that gets context of site your on and suggests educational alternatives";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Javascript", "Hackathon", "Experimental"]; 
}

var Downlowd = function(){
	this.name = "Down Low'd";
	this.date = "September 2015";
	this.smallDesc = "WatchApp that swaps contacts and sends linkedin requests with a down low.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C","NodeJS", "Javascript"]; 
}

var DotDoccer = function(){
	this.name = "BrailleLens";
	this.date = "September 2015";
	this.smallDesc = "a real time braille to text translator";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Mobile", "Hackathon"]; 
}

var LetsGraduate = function(){
	this.name = "LetsGraduate";
	this.date = "March 2015";
	this.smallDesc = "Database project that helps students optimize their schedules";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS", "mySQL","WebDev","BootStrap"];
}

var IntelliWheels = function(){
	this.name = "IntelliWheels";
	this.date = "June 2015";
	this.smallDesc = "Internship project to help users customize their own wheelchairs.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS", "MongoDB","WebDev","BootStrap","Javascript"];
}

var Cublet = function(){
	this.name = "Cublet";
	this.date = "July 2015";
	this.smallDesc = "A prototype for creating a scratch-like interface for Mathematica";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Javascript", "Canvas","Mathematica"];
}

var ThisWebsite = function(){
	this.name = "This Website";
	this.date = "Oct 2015";
	this.smallDesc = "This personal website you are on!";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WebDev", "Javascript","CSS","BootStrap"];
}

var Hickori = function(){
	this.name = "Hickori";
	this.date = "Sept 2015";
	this.smallDesc = "Using big data to make EM attendence risk rates";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Azure"];
}

var Yahtzee = function(){
	this.name = "Yahtzee Roll";
	this.date = "June 2013";
	this.smallDesc = "Program that randomly rolls until yahtzee";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash"];
}


var ROYGBIV = function(){
	this.name = "ROYGBIV";
	this.date = "December 2011";
	this.smallDesc = "Program to assist me in learning new platforms.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash", "Mobile","Java","Experimental"];
}

var Valintine = function(){
	this.name = "Valintine";
	this.date = "Febuary 2014";
	this.smallDesc = "A valintine flash game.";
	this.desc = "";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash"];
}







/*
PROJECTS TODO:
	✓Space Dexterity
	✓Test Your Inner Gamer
	✓Space Fishers
	✓CCC
	✓Floating Boxes of Wonder
	-Space Dexterity 2

	-Simulator_237/Simulator_238
	
	-Loaded
	-TakeOut
	-Arbitrio
	
	-MyRighttoplay
	-ZombieIO
	
	-GHistory Scrapper
	-MrGameAndWatch
	
	-Stela
	-UpTalk
	-cobbleStone
	-lawyerUp
	-Corvisa
	-Frizzle
	-Downlow'd
	-DotDocer

	-Lets Graduate
	-IntelliWheels
	-Cublet


	-This Website
	-Hickori
	-Yahtzee
	-SuperOrganDonor
	-ROYGBIV - FLASH
	-ROYGBIV - JAVA
	-Valintine/Valintine Mod

	**Removed for being contriversial**
	Success
	SobrietyTest
	TheFapp
	TheFappV2:The Daily Beater
*/

//CATEGORIES
var Projects = [
new SpaceDexterity(),
new TestYourInnerGamer(),
new SpaceFishers(),
new CrazyCrystallizedCalamity(),
new FloatingBoxesOfWonder(),
new SpaceDexterity2(),
new Simulator_237(),
new Loaded(),
new TakeOut(),
new Arbitrio(),
new MyRightToPlay(),
new ZombieIO(),
new GoogleHistoryScrapper(),
new MrGameAndPebbleWatch(),
new Stela(),
new Uptalk(),
new CobbleStone(),
new LawyerUp(),
new ArbCorvisa(),
new Frizzle(),
new Downlowd(),
new DotDoccer(),
new LetsGraduate(),
new IntelliWheels(),
new Cublet(),
new ThisWebsite(),
new Hickori(),
new Yahtzee(),
new ROYGBIV(),
new Valintine()
];


var Featured = [
new SpaceDexterity2(),
new DotDoccer(),
new Loaded(),
new IntelliWheels(),
new Cublet()
]

var Recent = [
new ThisWebsite(),
new DotDoccer(),
new Hickori(),
new Downlowd(),
new IntelliWheels(),
new Frizzle(),
new Cublet(),
new ArbCorvisa(),
new LawyerUp()
]

var WebDev = [
new MyRightToPlay(),
new ThisWebsite(),
new IntelliWheels(),
new LetsGraduate()
]

var Gaming = [
new SpaceDexterity2(),
new Valintine(),
new FloatingBoxesOfWonder(),
new SpaceFishers(),
new TestYourInnerGamer(),
new SpaceDexterity(),
new Loaded(),
new ZombieIO(),
new CobbleStone()

];

var projArrays = new Array();
projArrays['All'] = Projects;
projArrays['Featured'] = Featured;
projArrays['Recent'] = Recent;
projArrays['WebDev'] = WebDev;
projArrays['Gaming'] = Gaming;






////////////////////////////PROGRAM
var projectTables = document.getElementsByClassName("projectTable");
var infoDiv = document.getElementsByClassName("infoDiv");
var projectTitles = document.getElementsByClassName("infoTitle");
var projectBorder = document.getElementsByClassName("infoBorder");
var projectText = document.getElementsByClassName("infoText");
var projectTag = document.getElementsByClassName("infoTags");
var projectTags = document.getElementsByClassName("tagsText");




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
	var projects = projArrays[str];
	for(var i=0; i<projects.length; i++){
		loadTable(projectTables[i], infoDiv[i], projectTitles[i], projectBorder[i], projectText[i], projectTag[i], projectTags[i], projects[i]);;
	}
	for(var i=projects.length; i<projectTables.length; i++){
		removeTable(projectTables[i], infoDiv[i], projectTitles[i], projectBorder[i], projectText[i], projectTag[i], projectTags[i]);
	}	
}

function removeTable(table,info,projectTitle,projectBorder,projectText,projectTag,projectTags){
	table.style.opacity = "0";
	info.style.opacity = "0";
	projectTitle.style.opacity = "0";
	projectTitle.style.padding = "0px 5px";
	projectBorder.style.opacity = "0";
	projectText.style.opacity = "0";
	projectTag.style.opacity = "0";
	projectTags.style.opacity = "0";
	projectText.style.padding = "0px 25px";
	projectTag.style.margin = "0px 25px";
	projectTags.style.margin = "0px 25px";

	var old_element = info;
	var new_element = old_element.cloneNode(true);
	old_element.parentNode.replaceChild(new_element, old_element);
}

function loadTable(table,info,projectTitle,projectBorder,projectText,projectTag,projectTags,data){
	if(info){
		info.style.width = table.offsetWidth+"px";
		info.style.height = table.offsetHeight+"px";
	}
	table.style.opacity = "1";
	table.style.backgroundImage = "url('"+data.mainScreenshot+"')";
	//table.style.backgroundRepeat = "no-repeat";
	//table.style.backgroundAttachment = "fixed";
	table.style.backgroundPosition = "center";
	table.style.backgroundSize = table.offsetWidth+"px";//background-size: 80px 60px;
	projectTitle.innerHTML = data.name;
	projectText.innerHTML = data.smallDesc;

	var tags = "";
	for(var i=0; i<data.tags.length; i++){
		tags+=data.tags[i]+", ";
	}
	projectTags.innerHTML = tags;

	info.addEventListener('mouseover',function over(m){
		 info.style.opacity = ".7";
		 projectTitle.style.opacity = "1";
		 projectTitle.style.padding = "0px 15px";
		 projectBorder.style.opacity = "1";
		 projectText.style.opacity = "1";
		 projectTag.style.opacity = "1";
		 projectTags.style.opacity = "1";
		 projectText.style.padding = "0px 15px";
		 projectTag.style.margin = "0px 15px";
		 projectTags.style.margin = "0px 15px";
	});
	info.addEventListener('mouseout',function over(m){
		 info.style.opacity = 0;
		 projectTitle.style.opacity = "0";
		 projectTitle.style.padding = "0px 5px";
		 projectBorder.style.opacity = "0";
		 projectText.style.opacity = "0";
		 projectTag.style.opacity = "0";
		 projectTags.style.opacity = "0";
		 projectText.style.padding = "0px 25px";
		 projectTag.style.margin = "0px 25px";
		 projectTags.style.margin = "0px 25px";
	});

}

displayProjectsOf('Featured');
$(window).on('resize', function(){
	setTimeout(function(){	
		var tableWidth = projectTables[0].offsetWidth;
		var tableHeight = projectTables[0].offsetHeight;
		for(var i=0; i<infoDiv.length;i++){
			infoDiv[i].style.width = tableWidth+"px";
			infoDiv[i].style.height = tableHeight+"px";
		}
	},500);
});


