
//alert("This site is currently being updated. It is not supported for mobile devices yet, and projects are yet to be uploaded.");

console.log("confff");

(function(){

  var el = document.getElementById("parallax"),
      speed = 0.5;
//console.log("conf");
  window.onscroll = function(){
      //console.log("scrollin");

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + ((windowYOffset * speed)-60) + "px";
      //console.log(el);
      el.style.backgroundPosition = elBackgrounPos;

  };

})();
var updating = false;
var mainText = document.getElementById("mainText");
function recursiveDelete(string){
    setTimeout(function(){
        mainText.innerHTML += string.substring(0,1);
        //console.log(string);
        if(string.length>0){
            recursiveDelete(string.substring(1,string.length));
        }else{
            updating = false;
        }
    },2);
}

function updateMainText(text){
    mainText.innerHTML = "";
    recursiveDelete(text);
}

function coin_clicked(frame){
    console.log(frame);
    if(!updating){
       updating = true;
        if(frame <39){
            console.log("zero");
            updateMainText("Anil can't go a day without having a drop of the sweet succulant magical mixture that is coke zero.");
        }else if(frame < 79){
            console.log("state");
            updateMainText("Anil is from the sunshine state. More specifically Miami. Not born, but raised.");
        }else if(frame < 120){
            console.log("animate");
            updateMainText("My favorite game is Project M, a mod of Super Smash Bros Brawl, in which my favorite fighter is Ganondorf");
        }else if(frame <159){
            console.log("animate");
            updateMainText("Prior to programming, I used to love to animate, and still do from time to time. However I now mostly dynamically generate animations via code opposed to tediously constructing them by hand.");
        }else if(frame < 200){
            console.log("Monopoly");
            updateMainText("I really enjoy board games and most strategy based games. One of my favorites that I've constructed with a couple of friends is Monopoly Forced-Auction, which is essentially just regular monopoly but whenever a property is landed on its auctioned rather than being exclusive to the lander");
        }else if(frame < 240){
            console.log("spongebro");
             updateMainText("My favorite childhood series is none other than Spongebob Squarepants.");
        }else{
            console.log("back to start");
            updateMainText(" Who is this guy? Anil is a soon to be Computer Science and Statistics graduate from the University of Illinois. He's a highly enthusiastic programmer with expereince in various platforms and practices from web dev to mobile to AI to gaming. An avid hackethoner with 11 consecutive wins that is passionate about learning and working with others.");
        }
    }
}

/*
function display(id){
	var content;
       var title;
		switch(id){
			case 0:
                $title = 'Space Dexterity';
				content = "<div align='center'><p>Space Dexterity was by first start to finish project. It took me 3 days to make and was so fun it encouraged me to make more programs. I posted it on online and embedded Mochi onto it and since 2010 has gotten well over 200,000 plays.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,'style='width:550px; height:400px; z-index:100;'><param name='movie' value='http://www.myrighttoplay.com/swfs/space-dexterity.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://www.myrighttoplay.com/swfs/space-dexterity.swf' style='width:550px; height:400px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
				$( "#dialog" ).dialog({
  width: 580});

				break;
			case 1:
                $title = 'Test Your Inner Gamer';
				content = "<div align='center'><p>This game was made so that I could get adept at basic programming mechanics, and just in general practice.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,'style='width:550px; height:400px; z-index:100;'><param name='movie' value='http://uploads.ungrounded.net/582000/582723_tyig2.swf?123' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://uploads.ungrounded.net/582000/582723_tyig2.swf?123' style='width:550px; height:400px; z-index:100;'quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
				$( "#dialog" ).dialog({
  width: 580});
				break;
			case 2:
                $title = 'ROYGBIV-FLASH';
				content = "<div align='center'><p>This was a small game I created in order to learn as3. It was based off a game I made previously that I also used to learn Android development. The game is made to test all basic game mechanics such as inputs event handlers and hit detection</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,'style='width:400px; height:600px; z-index:100;'><param name='movie' value='http://uploads.ungrounded.net/586000/586962_rgbSaftey.swf?123' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://uploads.ungrounded.net/586000/586962_rgbSaftey.swf?123' style='width:400px; height:600px; z-index:100;'quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
			    $( "#dialog").dialog({width: 500});
                break;
            case 3:
                $title = 'Space Fishers';
                content = "<div align='center'><p>This was a game that was heavily inspired by asteroids. This project had a great deal of object orientation, from the Asteroids to the enemy AI.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:600px; height:600px; z-index:100;'><param name='movie' value='http://www.myrighttoplay.com/swfs/space-fishers.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://www.myrighttoplay.com/swfs/space-fishers.swf' style='width:600px; height:600px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 650});
                break;
            case 4:
                $title = 'Crazy Crystallized Calamity';
                content = "<div align='center'><p>This game was a quick flash game that dealt with advanced collision detection algorithms and basic physics.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:600px; height:600px; z-index:100;'><param name='movie' value='http://uploads.ungrounded.net/619000/619887_FromMochi.swf?123' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://uploads.ungrounded.net/619000/619887_FromMochi.swf?123' style='width:600px; height:600px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 650});
                break;
            case 5:
                $title = 'Floating Boxes of Wonder';
                content = "<div align='center'><p>This weekend project was my most successful flash game accumulating over 400,000 views.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:640px; height:440px; z-index:100;'><param name='movie' value='http://www.myrighttoplay.com/swfs/floating-boxes-of-wonder.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://www.myrighttoplay.com/swfs/floating-boxes-of-wonder.swf' style='width:640px; height:440px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 690});
                break;
            case 6:
                $title = 'Sobriety Test';
                content = "<div align='center'><p>This game was a personal challenge of mine to make a flash game within 24 hours.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:550px; height:400px; z-index:100;'><param name='movie' value='http://uploads.ungrounded.net/598000/598759_Soberiety_Test.swf?123' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://uploads.ungrounded.net/598000/598759_Soberiety_Test.swf?123' style='width:550px; height:400px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 600});
                break;
            case 7:
                $title = 'Chibi Creation';
                content = "<div align='center'><p>This was a project I collaborated with a classmate for a digital art class I took.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:600px; height:400px; z-index:100;'><param name='movie' value='http://myrighttoplay.com/ajason/dir/projects/The_Hero%20(1).swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://myrighttoplay.com/ajason/dir/projects/The_Hero%20(1).swf' style='width:600px; height:400px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 650});
                break;
            case 8:
                $title = 'Simulator_237';
                content = "<div align='center'><p>This project started as an experiment, but then I decided to polish and publish it. It deals with computational evolution, and has objects replicate themselves and compete against each other.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:600px; height:600px; z-index:100;'><param name='movie' value='http://uploads.ungrounded.net/623000/623656_FASCIST.swf?1376825831' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://uploads.ungrounded.net/623000/623656_FASCIST.swf?1376825831' style='width:600px; height:600px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 650});
                break;
            case 9:
                $title = 'Space Dexterity 2';
                content = "<div align='center'><p>With the impending death of Flash, I decided to just give my first platform one last go and make my final flash game a tribute to my first. </p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:600px; height:450px; z-index:100;'><param name='movie' value='http://myrighttoplay.com/ajason/dir/projects/Space%20Dexterity%20II.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://myrighttoplay.com/ajason/dir/projects/Space%20Dexterity%20II.swf' style='width:600px; height:450px; z-index:100;' quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 650});
                break;
            case 10:
                $title = 'Success';
                content = "<div align='center'><p>This game was a quick warm-up I gave myself before I started freshman year as a CS undergrad</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:700px; height:500px; z-index:100;'><param name='movie' value='http://myrighttoplay.com/ajason/dir/projects/game_1.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://myrighttoplay.com/ajason/dir/projects/game_1.swf' style='width:700px; height:500px; z-index:100;'quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 750});
                break;
            case 11:
                $title = 'ROYGBIV-ANDROID';
                content = "<div align='center'><p>ROYGBIV was my first start to finish Android app. It's a simple game that has all the fundamental game mechanics and was used to help me understand how to draw on the canvas and manipulate the Android environment.</p><br><a href='https://play.google.com/store/apps/details?id=myrighttoplay.android.ROYGBIV' target='_blank'>Click here to view the game on the appstore</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 12:
                $title = 'The FappV2';
                content = "<div align='center'><p>The FappV2 is a sequel to a surprisingly successful joke app. This app records your fapping performance and generates statistics and fun facts depending on your input. Requires the pebble to use. </p><br><a href='https://play.google.com/store/apps/details?id=cdlewis.pebbleaccelstream' target='_blank'>Click here to view the game on the appstore</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 13:
                $title = 'Arbitrio';
                content = "<div align='center'><p>Arbitrio is a semi-large scaled project I made freshman year as a school project. This applet enables you to make your own text based adventure and post it online for other people to see. You could also attach images to add graphical fidelity. It took 3 months to make and was made completely from scratch, becoming my largest project to date by far (excluding MRTP).</p><br><p>DISCLAIMER: In order to view the applet you have to download and run the Runnable jar file.</p><br><a href='http://myrighttoplay.com/ajason/dir/projects/Runnable.jar' target='_blank'>Click here to download App. (Requires Java Plugin)</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 14:
                $title = 'MyRightToPlay';
                content = "<div align='center'><p>My largest project was myrighttoplay.com, a flash portal site I created and maintained throughout most of high school. It taught me a great deal on how the web works and inspired me to learn and master CSS, HTML, JS, PHP and MySQL. It also encouraged me to learn elegant UI and optimal database management, because good software should be beautiful inwards and out. It was a fun and eye-opening experience that I loved, but eventually left because I wish to move on to more applicable fields and focus less on gaming.</p><br><a href='http://myrighttoplay.com' target='_blank'>Click here to view the current state of the website</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 15:
                $title = 'Html5Art';
                content = "<div align='center'><p>My first html5 project was to create a simple dynamic animation.</p><br><a href='http://myrighttoplay.com/1337file/SAS/online_drive/EyeMovement/Script.html' target='_blank'>Click here the animation.</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 16:
                $title = 'Munchkin Counter';
                content = "<div align='center'><p>Quick little app I made to serve as a game sheet for the game Munchkins</p><br><a href='http://myrighttoplay.com/1337file/html5/Munchkins/munchkins.html' target='_blank'>Click here the app.</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 17:
                $title = 'Zombie Survival';
                content = "<div align='center'><p>This is a experimental multi player game I made using the api firebase. The objective is to survive as long as you can and not let the green squares touch you. The challenge of the experiment was to optimize the game as much as possible to allow as much players to run with the free hacker server. </p><br><p> To play first get a computer to host by clicking</p> <a href='http://myrighttoplay.com/1337file/Zombie/ZombieThing/Host.html' target='_blank'> THE HOST DIRECTORY</a> <p> Then get a friend to join you by having them click on </p><a href='http://myrighttoplay.com/1337file/Zombie/ZombieThing/Player_2.html' target='_blank'>THE PLAYER DIRECTORY </a> <p> A more refined version was made using socketIO that could take and unlimited amount of players. </p> <a href='https://github.com/saternius/ZombieIO'> click here to view the source</a> </div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 18:
                $title = 'Mr.Game and Watch';
                content = "<div align='center'><p>This game is a recreation of the retro Nintendo game Mr.Game on Watch, brought to you on the pebble.</p><br><p>You can download this game on the pebble app store</p></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 19:
                $title = 'The Fapp';
                content = "<div align='center'><p>The Fapp was a joke app I made during spring break, shortly after getting the pebble watch. It did surprisingly well getting into the top 20 most liked app on the health and fitness section of the pebble apps.</p><br><p> You can download the app on the pebble appstore. </p></div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 20:
                $title = 'Stela';
                content = "<div align='center'><p>Stela was a project collaborated within a hackaton. It allows you to download articles offline and read them on your pebble watch with spritz like reading format.</p><br><a href='http://myrighttoplay.com/ajason/dir/projects/Stela.pbw' target='_blank'>You can download the pbw for the BETA by clicking this link</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
                
                case 21:
                $title = 'Loaded';
                content = "<div align='center'><p>Loaded was a project I worked on to kill extra time over the summer. Although predominantly finished, the app still not entirely complete. Advertising so far has been kept to a minimal for this project.</p><br><a href='https://play.google.com/store/apps/details?id=com.stela.loaded' target='_blank'>You can download the apk</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
                
                 case 22:
                $title = 'Super Organ Donor';
                content = "<div align='center'><p>Super Organ Donor is a game that everyone is playing. They just don't know it yet. It was created during a hackathon, and is yet to be published. Be the first of your friends to be eaten.</p><br><a href='http://myrighttoplay.com/hackathon/?1' target='_blank'>Click on this link to donate your brains</a></div>";
                $( "#dialog").dialog({width: 500});
                break;
                
                
                case 23:
                $title = 'Valintine';
                content = "<div align='center'><p>This game was a joke made towards a friend of mine. It was made as a gag for a secret Santa valentines day gift.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:700px; height:400px; z-index:100;'><param name='movie' value='http://myrighttoplay.com/ajason/dir/projects/MyWeekend.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://myrighttoplay.com/ajason/dir/projects/MyWeekend.swf' style='width:700px; height:400px; z-index:100;'quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 740});
                break;
                
                case 24:
                $title = 'Valintine Mod';
                content = "<div align='center'><p>I made a mod on the valentines day gift so that you can substitute the objects in the game with any image</p><br><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:700px; height:400px; z-index:100;'><param name='movie' value='http://myrighttoplay.com/ajason/dir/projects/TheProject.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://myrighttoplay.com/ajason/dir/projects/TheProject.swf' style='width:700px; height:400px; z-index:100;'quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 740});
                break;
                
                case 25:
                $title = 'Sim_238';
                content = "<div align='center'><p>Thought about remaking sim_237 but in a more optimized manner. The objective of this simulation is that we are in a 'virtual environment' where the only lifeforms are small dumb organisms. They just want to live and to do so they have to eat small yellow pellets. Competition is high amongst peers though. Also implemented a mutation/evolution system. This project is still in development. To see dominance table press 1. To toggle the life tree press D</p><br><a href='http://myrighttoplay.com/ajason/dir/projects/Sim_Run.jar' target='_blank'>Click on this link to download the runnable jar </a></div>";
                $( "#dialog").dialog({width: 540});
                break;
                
                case 26:
                $title = 'TakeOut';
                content = "<div align='center'><p>Hackathon winning project that uses Wolframs rest-API along with the Wolfram Cloud to predict how long a person could live if they lived on an unhealthy limited diet. Estimates which organs are likely to fail first along with your chance of survival over time. Worked with a nutritionist to extract a more accurate result. Was a great experience in working with others outside my field. *Because this was made in a hackathon to reduce time I only programmed it to work on my specific phone with it's specific 1080p resolution.</p> <br> <a href='https://github.com/saternius/TakeOut' target='_blank'>Click this link to view it's source</a></div>";
                $( "#dialog").dialog({width: 540});
                break;
				
				case 27:
                $title = 'Google Scrapper';
                content = "<div align='center'><p> For some reason, Google does not allow you to download all your searches in a convenient manner. So to do such a task I made my own scrapper. </p> <br> <a href='https://github.com/saternius/Google-History-Scrapper' target='_blank'>Click this link to view it's source</a></div>";
                $( "#dialog").dialog({width: 540});
                break;
        }


    $("#dialog").dialog('option', 'title', $title);
	document.getElementById("dialog").innerHTML=content;
	$( "#dialog" ).dialog( "option", "position", [center,-150] );
	window.scrollTo(0, 1000);
}
*/