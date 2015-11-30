
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
	this.mainScreenshot = 'images/projectShots/Todo.png'
	this.screenshots = ["images/projectShots/SpaceDexterity/GamePlay1.png", "images/projectShots/SpaceDexterity/Menu.png"];
	this.embed = ['swf','images/projectShots/SpaceDexterity/swf/space-dexterity.swf','550','400']; 
	this.tags = ["Flash","Gaming"];
}

var TestYourInnerGamer = function(){
	this.name = "Test Your Inner Gamer";
	this.date = "November 2010";
	this.smallDesc = "A game composed of several minigames in order to get experience in implementing various gaming mechanics";
	this.desc = "Test Your Inner Gamer was the second game I created that was composed fo several minigames in order to get a hang of implementing various gaming mechanics and strengthen my overall programming abilities.";
	this.mainScreenshot = 'images/projectShots/Todo.png'
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
	this.mainScreenshot = 'images/projectShots/Todo.png'
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
	this.mainScreenshot = 'images/projectShots/Todo.png'
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
	this.mainScreenshot = 'images/projectShots/Todo.png'
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
	this.desc = "Space Dexterity is a local multiplayer platformer where you race to a portal after dodging various obsticles. It was my last flash game attempt that was a tribute to my first official flash game as I was aware at the time that flash's lifespan was soon comming to an end. I still very much enjoy using the flash IDE, but I now program mostly in create.js/canvas for all my browser base games. This final project helped cement my skills as a game developer on how to implement and streamline core game mechanics.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash", "Gaming"]; 
}


var Simulator_237 = function(){
	this.name = "Simulator 237/238";
	this.date = "July 2013/2014";
	this.smallDesc = "Sandbox in which small bots compete for life, and evolve in the process.";
	this.desc = "Simulator 237 is a sandboxed environment where tiny bots compete for life. They have to eat tiny pellets to survive, and once matured can asexually reproduce. The world's resources fluctuate in a seasonal fashion encouraging population booms and crashes that stimulates evolutionary progression. It's quite entertaining to sit back and watch them swim and change the world's properties to see how they react. A future implementation is add the ability to create borders that can split populations and have them evolve seperately. Another potential addition is to add chemicals that have different effects at different doses that the creatures can produce.";
	this.mainScreenshot = 'images/projectShots/Todo.png'
	this.tags = ["Flash", "Gaming"]; 
}

var Loaded = function(){
	this.name = "Loaded";
	this.date = "June 2014";
	this.smallDesc = "Hand crafted physics engine implemented in a unique toilet game.";
	this.desc = "Loaded is an experimental mobile shootem up game that uses the accelerometer as an analogue input for aiming. It was constructed as an implementation of a graphics engine that was crafted from scratch. Creating Loaded taught me a great deal about game development on Android devices, including how to properlly implement Google's play services. There are a great deal of flaws that this game suffers as far as game design goes that I can go in great lengths detailing, however the project was not designed to be a good gaming experience but rather a challenge of technical compentency on my end for building an Android game from the ground up.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Mobile", "Gaming","Large","Java"]; 
}


var TakeOut = function(){
	this.name = "Loaded";
	this.date = "Febuary 2015";
	this.smallDesc = "See how long you could live eating only one food before having organ failure";
	this.desc = "TakeOut was the first win in a long streak of hackathons. It was a tounge in cheek application concieved at the first hour of the event (Hack Illinois 2015) in which we questioned how long we could survive on only consuming hackathon food. So we created an app to answer just that. All the user had to do was type in a series of foods they would strictly consume and we would use wolframAlpha data and analytics to predict what essential vitamins would you deficit/surplus on the most, and how/when you eventually will die. My team and I even recruited a nutritionist major help us on the accuracy of the analysis";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Mobile", "Experimental", "Java", "Hackathon"]; 
}

var Arbitrio = function(){
	this.name = "Arbitrio";
	this.date = "October 2013";
	this.smallDesc = "Interface that allows users to make their own walkthrough adventures, and post them online.";
	this.desc = "Arbitrio was my honors project for CS125. The idea was to create an application that made it easy for people to generate their own walk through adventrures and to have a forum where people could play the adventures of other users and comment/like/modify the adventure. The app allowed users to embed graphics into their stories to give it additional details and allowed for users to generate complex stories with loops and merging branches. The app was successfully completed but not advertised as it was developed in a java applet (which is very web unfriendly now adays) so a future reconstruction on canvas is something I hope to have time for. Feel free to download the app in the link below";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Java", "PHP", "mySQL", "Large"]; 
}

var MyRightToPlay = function(){
	this.name = "Loaded";
	this.date = "December 2010";
	this.smallDesc = "Dynamic portal for flash games all over the web.";
	this.desc = "MyRightToPlay was a flash portal site that me and my best friend founded in highschool that scrapped top quality flash games off the web and rehosted it. Users had the ability to create their own accounts, gain rewards for playing, and received suggestions of other games based on their preferences. From it I learned a great deal about web practices, elegant UI, and optimal database management. Not to mention it gave me big insight on the flash gaming industry. At one point the site had a few thousand active users but with the inevitable death of flash I decided to move on, however I will never loose the learning experience I gained from it.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WebDev", "Gaming","Flash","Large","PHP","Javascript"]; 
}

var ZombieIO = function(){
	this.name = "ZombieIO";
	this.date = "March 2014";
	this.smallDesc = "Minimalistic online multiplayer game where you survive a zombie swarm";
	this.desc = "ZombieIO is my first attempt at making a real time multiplayer game using socketIO. The concept is pretty simple you join a room in which you are a small square dot in a square grid matrix. Zombies spawn over time and if you get touch you become a zombie. You're goal is to live out the 2 minute clock. A new game starts every two minutes. This project taught me how to manage real time server side and client side syncing of data transmissions, and how to make a real time multiplayer game.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Canvas", "Gaming","NodeJS","Javascript"]; 
}


var GoogleHistoryScrapper = function(){
	this.name = "Google History Scrapper";
	this.date = "January 2015";
	this.smallDesc = "Script that allows users to get all their google searches in one convinient text file";
	this.desc = "For some reason google does not allow users to export all their search queries in a convinient format. So I made a scrapper that does that for you. All you have to do is edit your username/pass in and it will generate a text file with all your search queries. This project taught me how to do advanced web scrapping.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS", "Javascript" ,"Experimental"]; 
}

var MrGameAndPebbleWatch = function(){
	this.name = "Mr.Game and PebbleWatch";
	this.date = "March 2014";
	this.smallDesc = "Recreation of the classic nintendo game into the pebble watch";
	this.desc = "Mr.Game and PebbleWatch was my first pebble application. It's a tribute to nintendo's first game series Mr.Game and Watch which was a retro polycom game that was also an alarm clock. This app was essentially a recreation of one their minigames but on the pebble watch. The concept of the game is simple, at a semi-random interval Mr.Game and his opponent raises their flag an reviels a number. If the number is higher than your opponent you want to smack your hammer, if it is lower you want to dodge. Whoever reacts first makes their move first. Beware of making the wrong moves. This game taught me how to program on the Pebble Watch";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C"]; 
}

var Stela = function(){
	this.name = "Stela";
	this.date = "Febuary 2014";
	this.smallDesc = "Pebble App that pulls an article from your phone and spritz streams it to your watch";
	this.desc = "Stela is a Pebble App that pulls an article from your phone and display it in a spritz like stream on to your pebble watch. This allows you to convininently read in the shower and conserve battery. Not to mention studies have show reading in spritz form increases reading speed and comprehension.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C","Hackathon"]; 
}

var Uptalk = function(){
	this.name = "UpTalk";
	this.date = "May 2015";
	this.smallDesc = "Mobile app that helps you learn a new language in a new way";
	this.desc = "UpTalk was a first place hackathon project for Mad Hacks 2015. It was a unique app that allowed users to text in various languages to other users and robots in case there is a language to language deficit. It also generated language puzzles dynamically and kept record on your language performance such as which for of grammer you stuggled on the most and which words you use the most.";
	this.mainScreenshot = 'images/projectShots/Todo.png'
	this.tags = ["Mobile", "C", "Hackathon","Javascript", "Ionic"]; 
}

var CobbleStone = function(){
	this.name = "CobbleStone";
	this.date = "April 2015";
	this.smallDesc = "WarioWare-like multiplayer coop game for the pebble.";
	this.desc = "CobbleStone won best use of NodeJS at RedBird Hacks 2015. It was a WarioWorld-like multiplayer game for the pebble watch. In it you have any number of players aligned in a cycle in which each user in a cycle has to complete a random task in a short amount of time. If they succeed they give bonus time to the next person ahead of them in the cycle however if they mess up they deduct time from the player ahead of them in the cycle. This encourages strong communal gameplay.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C", "Gaming", "NodeJS", "Javascript", "Hackathon"]; 
}

var LawyerUp = function(){
	this.name = "Lawyer Up";
	this.date = "July 2015";
	this.smallDesc = "Oregon Trail -like game aimed to inform the user about good legal health";
	this.desc = "Winner of the Michigan Legal Help Program Challenge at LexHacks 2015, this game aimed to help inform players about the benifits of good legal health. The game has an Oregon Trail like playthrough where the player can choose which legal advices to adopt and over the years face consequences to their actions. The player can refer to their personal lawyer at any time to help them get out of legal trouble. The game was made with scalability in mind and had an elegent modularized system that enabled additional content to be added and updated with ease.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Canvas", "Gaming", "Hackathon", "Javascript"]; 
}

var ArbCorvisa = function(){
	this.name = "Arbitrio(Corvisa)";
	this.date = "July 2015";
	this.smallDesc = "Frontend UI for corvisa aimed at non-technical individuals";
	this.desc = "Winner of Best use of Corvisa API and Best use of .co at Techweek Chicago, this application aimed to give the power of corvisa to the common man. Corvisa is an API that allows developers to automate/manipulate phone messages and calls. What this app did was create a UI layer on top of the API that allowed non-technical individuals to utilize the core functionalities of the corvisa API, so that they can program their own automated phone bot without writing a single line of code. ";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS","Javascript", "Hackathon"]; 
}

var Frizzle = function(){
	this.name = "Frizzle";
	this.date = "August 2015";
	this.smallDesc = "Chrome extension that gets context of site your on and suggests educational alternatives";
	this.desc = "Winner of best use of Microsoft Azure at Hack The Planet, Frizzle is a chrome extension that uses Azure machine learning to figure out contextual information off of a webpage such that it recommends educational alternative articles that are relevant to the topic on the page. This way a user can adopt more academic based web browsing habits. For those that want to use their web browsing time more productively.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Javascript", "Hackathon", "Experimental"]; 
}

var Downlowd = function(){
	this.name = "Down Low'd";
	this.date = "September 2015";
	this.smallDesc = "WatchApp that swaps contacts and sends linkedin requests with a down low.";
	this.desc = "Winner of the best Pebble App for MHacks 2015. What's the low down on the DownLow'd? Its an app that allows user to download contact information from each other with a simple Down Low highfive. They could swap contact information or add each other on facebook/linkedin. This app aimed to provide a convinient way for people to hook up at gatherings such as hackathons.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WatchApp", "C","NodeJS", "Javascript"]; 
}

var DotDoccer = function(){
	this.name = "Braillense";
	this.date = "September 2015";
	this.smallDesc = "a real time braille to text translator";
	this.desc = "Second Place Winner at Husky Hacks, Braillense is a real time braille to text translator in Android. Aimed as a tool to assist teachers of the visually impaired, who reportedly spend more than half their time working painstakingly deciphering braille. This app allows the user to simply hover your phone’s camera over braille and the app overlays text where the braille was.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Mobile", "Hackathon"]; 
}

var LetsGraduate = function(){
	this.name = "LetsGraduate";
	this.date = "March 2015";
	this.smallDesc = "Database project that helps students optimize their schedules";
	this.desc = "Lets graduate was a group project assigned for database course. The application was made so that it would assist students in optimising their schedule so that they could graduate as quickly as possible. It also had additional features such as making a scheduale that requires the lease walking and minimal wait time between classes.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS", "mySQL","WebDev","BootStrap"];
}

var IntelliWheels = function(){
	this.name = "IntelliWheels";
	this.date = "June 2015";
	this.smallDesc = "Internship project to help users customize their own wheelchairs.";
	this.desc = "Intelliwheels was a project I interned on as a full stack developer over the summer. IntelliWheels is a website that allows users to customize their own wheelchair. The site presents the construction of a wheelchair in a linear intuitive fashion as there are many components of a wheelchair that many users would not understand such as the difference between a rear and back axle. In addition it gives recommendations on certain configurations depending on preferences of agility speed comfort etc. On top of that the site was built with scalability in mind, having a modular backend so that new wheelchairs and components could be added with ease.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["NodeJS", "MongoDB","WebDev","BootStrap","Javascript"];
}

var Cublet = function(){
	this.name = "Cublet";
	this.date = "July 2015";
	this.smallDesc = "A prototype for creating a scratch-like interface for Mathematica";
	this.desc = "Our project is a scratch-like drag-n-drop interface oriented towards kids and non-technical individuals, that aims to expose the beauty of mathematical exploration and data manipulation. In this web app the user should be able to pull, manipulate and display complex data sets easily by having the power of mathematica abstracted in blocks of information. They then can post whatever discoveries they find online and browse/open the discoveries of others.";
	/*Through a joint project with Anil Jason named Cublet (a web app - think Github + Wolfram Language + Scratch), Alastair mostly aims to construct the non-HTML5 canvas user-interface portion for the project - which includes a backend RESTful JSON server allowing Cublet to be extended to multiple outlets - from web to mobile apps and a front-end single-page application web app interface using Angular.JS.  Cublet would allow those new to programming, whether old or young, to learn how to program in the Wolfram Language using a subset of the Wolfram Language and its datasets, all in a friendly graphical interface. Users would be able to make an account in the app, share their Wolfram Language-based creations with the rest of the world and follow other users in the site. The Wolfram Language is unique in that it allows for use of functional and imperative programming paradigm, which sets it apart from mainstream and purely imperative C-based languages like C, Java, PHP, Python and so forth.*/
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Javascript", "Canvas","Mathematica"];
}

var ThisWebsite = function(){
	this.name = "This Website";
	this.date = "Oct 2015";
	this.smallDesc = "This personal website you are on!";
	this.desc = "This website was constructed primarily as a resume/buisness card displaying the projects that I have done and my overall compentency. However it serves a secondary purpose as a centeralized hub for me to manage all the projects that I made.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["WebDev", "Javascript","CSS","BootStrap"];
}

var Hickori = function(){
	this.name = "Hickori";
	this.date = "Sept 2015";
	this.smallDesc = "Using big data to make EM attendence risk rates";
	this.desc = "Hikori was a winning though experiment of a potential application of big data in the medical field for Husky Hacks. Take for instance this snippet of fact: There is a 20% hike in heart attacks on Mondays compared to the rest of the week. Now this fact is believable but not instantly intuitive, which begs the question, what other outside data affects spikes in emergency visits. What our app aimed to do was track emergencies occurance within hospital along with available data such as weather/sports events/ etc to try and find correlations using machine learning to uncover threats that one would not percieve on a microscale, and create a threat level indicator for a potential spike in visits.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Azure"];
}


var Yahtzee = function(){
	this.name = "Yahtzee Roll";
	this.date = "June 2013";
	this.smallDesc = "Program that randomly rolls until yahtzee";
	this.desc = "This project is scheduled to be replaced as I should try to minimize the numebers of projects on my site so that it is not overwhelming..";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash"];
}


var ROYGBIV = function(){
	this.name = "ROYGBIV";
	this.date = "December 2011";
	this.smallDesc = "Program to assist me in learning new platforms.";
	this.desc = "This project is scheduled to be replaced as I should try to minimize the numebers of projects on my site so that it is not overwhelming..";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash", "Mobile","Java","Experimental"];
}


var Valintine = function(){
	this.name = "Valintine";
	this.date = "Febuary 2014";
	this.smallDesc = "A valintine flash game.";
	this.desc = "Valintine was a flash game I made for a valintine present. Its a todou like game in which you must try to dodge hearts shooting out of a desperate little man, but given enough time his persistance would knock you out.";
	this.mainScreenshot = 'images/projectShots/Todo.png';
	this.tags = ["Flash"];
}

var PokerTV = function(){
	this.name = "PokerTV";
	this.date = "October 2015";
	this.smallDesc = "A chromecast/AppleTV app that allows you to play poker casually with your phone and TV.";
	this.desc ="Winner of best Apple application at Boilermake 2015, this app allows you to lay on your couch and play poker agaist you friends with any mobile device and an Apple TV (chromecast is on the works). This way you can enjoy a more fast paced version of the game and not have to deal with the nuissance of shuffling and passing around chips.";
	this.mainScreenshot = "images/projectShots/Todo.png";
	this.tags = ["Mobile","Javascript","NodeJS","Gaming","Hackathon"];
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
	new Valintine(),
	new PokerTV()
];


var Featured = [
	new SpaceDexterity2(),
	new DotDoccer(),
	new Loaded(),
	new IntelliWheels(),
	new Cublet(),
	new PokerTV(),
	new Simulator_237(),
	new MyRightToPlay()
	]

var Recent = [
	new ThisWebsite(),
	new PokerTV(),
	new DotDoccer(),
	new Hickori(),
	new Downlowd(),
	new IntelliWheels(),
	new Frizzle(),
	new Cublet(),
	new ArbCorvisa()
]

var WebDev = [
	new MyRightToPlay(),
	new ThisWebsite(),
	new IntelliWheels(),
	new LetsGraduate()
]

var Gaming = [
	new PokerTV(),
	new SpaceDexterity2(),
	new Valintine(),
	new FloatingBoxesOfWonder(),
	new SpaceFishers(),
	new TestYourInnerGamer(),
	new SpaceDexterity(),
	new Loaded(),
	new CobbleStone()
];

var WatchApp = [
	new MrGameAndPebbleWatch(),
	new Stela(),
	new CobbleStone(),
	new Downlowd()
];

var Mobile = [
	new Loaded(),
	new PokerTV(),
	new TakeOut(),
	new DotDoccer(),
	new Uptalk(),
	new Stela()
];

var Hackathon = [
	new TakeOut(),
	new Uptalk(),
	new CobbleStone(),
	new LawyerUp(),
	new ArbCorvisa(),
	new Frizzle(),
	new Downlowd(),
	new DotDoccer(),
	new PokerTV()
];

var LargeScale = [
	new MyRightToPlay(),
	new Arbitrio(),
	new IntelliWheels(),
	new Loaded()
];

var BackEnd = [
	new Arbitrio(),
	new MyRightToPlay(),
	new ZombieIO(),
	new CobbleStone(),
	new Downlowd(),
	new LetsGraduate(),
	new IntelliWheels(),
	new PokerTV()
]

var Experimental = [
	new Simulator_237(),
	new Hickori(),
	new Cublet(),
	new GoogleHistoryScrapper()
]

var projArrays = new Array();
projArrays['All'] = Projects;
projArrays['Featured'] = Featured;
projArrays['Recent'] = Recent;
projArrays['WebDev'] = WebDev;
projArrays['Gaming'] = Gaming;
projArrays['WatchApp'] = WatchApp;
projArrays['Mobile'] = Mobile;
projArrays['Hackathon'] = Hackathon;
projArrays['Large'] = LargeScale;
projArrays['BackEnd'] = BackEnd;
projArrays['Misc'] = Experimental;





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
	removeProject();	
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


var projectDiv = document.getElementById("projectDiv");
var displayingProj = false;
function loadProject(project){
	projectDiv.style.opacity = "1";
	displayingProj = true;
	disableTables();
}
function removeProject(){
	projectDiv.style.opacity = "0";
}

function disableTables(){
	for(var i=0; i<projectTables.length; i++){
		 infoDiv[i].style.cursor = "default";
		 infoDiv[i].style.opacity = 0;
		 projectTitles[i].style.opacity = "0";
		 projectTitles[i].style.padding = "0px 5px";
		 projectBorder[i].style.opacity = "0";
		 projectText[i].style.opacity = "0";
		 projectTag[i].style.opacity = "0";
		 projectTags[i].style.opacity = "0";
		 projectText[i].style.padding = "0px 25px";
		 projectTag[i].style.margin = "0px 25px";
		 projectTags[i].style.margin = "0px 25px";
	}
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

	info.addEventListener("click", function(m){
		loadProject(data);
	});

	info.addEventListener('mouseover',function over(m){
		if(!displayingProj){
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
		 }
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


