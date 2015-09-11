<!DOCTYPE html>
<html>
    <head>
    	<script>
	    	function stillWorkin(){
			alert("This blog is still currently in development");
		}
    	</script>
        <title>Anil Jason - Programer/Hacker/Nerd</title>
        <meta name="author" content="Anil Jason" />
        <meta name="description" content="The personal website dedicated to log my personal projects and hacks." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0;">
        <link rel="stylesheet" href="css/style.css" type="text/css" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato" type="text/css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" type="text/css">
        
        
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1-rc2/jquery.min.js"></script>
        <!--[if lt IE 9]>
            <script src="js/html5shiv.js"></script>
        <![endif]-->
    </head>
    <body>
    
    <!--
    <header>
        <div class="row">
           
            <nav>
                <ul>
                    <li><a onClick='stillWorkin()' href="#"><i class="fa fa-home"></i>Home</a></li>
                    <li><a onClick='stillWorkin()' href="index.php"><i class="fa fa-folder-open"></i>Portfolio</a></li>
                    <li><a onClick='stillWorkin()' href="#"><i class="fa fa-leaf"></i>Biography</a></li>
                    <li><a onClick='stillWorkin()' href="#"><i class="fa fa-picture-o"></i>Inspiration</a></li>
                    <li><a onClick='stillWorkin()' href="#"><i class="fa fa-gears"></i>Resources</a></li>
                </ul>
            </nav>
        </div>
    </header>
    -->

    <main>
	
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css">
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
	<link rel="stylesheet" href="/resources/demos/style.css">


<script>
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
                content = "<div align='center'><p>MyRightToPlay.com was a site that I collaborated with with Alastair Paragas. The idea was to make a simple home-brewed flash portal site that displayed only the best of flash games. We planned to implement accounts and a system of reward for playing games. This website has gone through countless recreations and design changes over the years.</p><br><a href='http://myrighttoplay.com' target='_blank'>Click here to view the current state of the website</a></div>";
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
                content = "<div align='center'><p>This is a experimental multiplayer game I made using the api firebase. The objective is to survive as long as you can and not let the green squares touch you. The challenge of the experiment was to optimize the game as much as possible to allow as much players to run with the free hacker server. This project was discontinued as js is insecure for it to go any further with free obfuscation software. </p><br><p> To play first get a computer to host by clicking</p> <a href='http://myrighttoplay.com/1337file/Zombie/ZombieThing/Host.html' target='_blank'> THE HOST DIRECTORY</a> <p> Then get a friend to join you by having them click on </p><a href='http://myrighttoplay.com/1337file/Zombie/ZombieThing/Player_2.html' target='_blank'>THE PLAYER DIRECTORY </a> </div>";
                $( "#dialog").dialog({width: 500});
                break;
            case 18:
                $title = 'Mr.Game and Watch';
                content = "<div align='center'><p>This game is a recreation of the retro nintendo game Mr.Game on Watch, brought to you on the pebble.</p><br><p>You can download this game on the pebble app store</p></div>";
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
                content = "<div align='center'><p>This game was a joke made towards a friend of mine. It was made as a gag for a secret santa valintines day gift.</p><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:700px; height:400px; z-index:100;'><param name='movie' value='http://myrighttoplay.com/ajason/dir/projects/MyWeekend.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://myrighttoplay.com/ajason/dir/projects/MyWeekend.swf' style='width:700px; height:400px; z-index:100;'quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 740});
                break;
                
                case 24:
                $title = 'Valintine Mod';
                content = "<div align='center'><p>I made a mod on the valintines day gift so that you can substitutue the objects in the game with any image</p><br><object id='swf_game_object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,' style='width:700px; height:400px; z-index:100;'><param name='movie' value='http://myrighttoplay.com/ajason/dir/projects/TheProject.swf' /><param name='quality' value='medium' /><param name='wmode' value='transparent' /><embed id='swf_game_embed' src='http://myrighttoplay.com/ajason/dir/projects/TheProject.swf' style='width:700px; height:400px; z-index:100;'quality='medium' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object></div>";
                $( "#dialog").dialog({width: 740});
                break;
                
                case 25:
                $title = 'Sim_238';
                content = "<div align='center'><p>Thought about remaking sim_237 but in a more optimized manner. The objective of this simulation is that we are in a 'virtual environment' where the only lifeform are small dumb organisms. They just want to live and to do so they have to eat small yellow pellets. Compitition is high amoungst peers though. Also implemented a mutation/evolution system. This project is still in development. To see dominance table press 1. To toggle the life tree press D</p><br><a href='http://myrighttoplay.com/ajason/dir/projects/Sim_Run.jar' target='_blank'>Click on this link to download the runnable jar </a></div>";
                $( "#dialog").dialog({width: 540});
                break;
                
                
        }


    $("#dialog").dialog('option', 'title', $title);
	document.getElementById("dialog").innerHTML=content;


}

</script>
<div id="dialog" title="Basic dialog">
</div>


<div id="leaderboard" class="row-full">
    <div class="row">
    <div id="about" class="grid-9 pad">
    <div id="profilePicture" class="grid-3">
            <img class="round" src="images/muh_face.jpg" />
        </div>
    <h1> I am Anil Jason, </h1>
    	<p>I am currently a student at the University of Illinois. I&#39;ve been programming since I was 13 and since then, dove into a variety of platforms. I currently know AS2, AS3, HTML, CSS, PHP, Javascript, Java(Including Android Dev), C, and C++. The following is a list of the presentable projects I completed. These do not include most of my experiemental projects. Of which, will be uploaded later.   </p>
         </div>
    </div>
</div>
<div id="aboutMore" class="row">
*This page is going to be updated over spring break. So glitches may be commonplace*
    <div class="grid-3 pad" id="skills">
        <h2>Flash</h2>


        <a onClick='display(0)' href='#'>
            Space Dexterity - 2010
        </a><br>

         <a onClick='display(1)' href='#'>
            Test Your Inner Gamer - 2010
        </a><br>

        <a onClick='display(2)' href='#'>
            ROYGBIV - 2011
        </a><br>

        <a onClick='display(3)' href='#'>
            Space Fishers - 2011
        </a><br>

        <a onClick='display(4)' href='#'>
            Crazy Crystilized Calamity - 2011
        </a><br>

        <a onClick='display(5)' href='#'>
            Floating Boxes of Wonder - 2012
        </a><br>

        <a onClick='display(6)' href='#'>
            Sobriety Test - 2012
        </a><br>

        <a onClick='display(7)' href='#'>
            Chibi Creation - 2013
        </a><br>

        <a onClick='display(8)' href='#'>
            Simulator_237 - 2013
        </a><br>

        <a onClick='display(9)' href='#'>
            Spaced Dexterity 2 - 2013
        </a><br>
          <hr>
	        	<b>Experiments:</b><br>
	        	
	        	
	         <a onClick='display(23)' href='#'>
            		Valintine - 2012
        	</a><br>
        	 <a onClick='display(24)' href='#'>
            		Valintine Mod - 2012
        	</a><br>	
	        	
                 <a onClick='display(10)' href='#'>
                    Success - 2013
                </a><br> 
                
                
                
                
                
                More coming soon.
    </div>
    <div class="grid-3 pad" id="philosophy">
        <h2>Java/Android</h2>
            <a onClick='display(11)' href='#'>
	        	ROYGBIV - 2011
	        </a><br>

	        
	<a onClick='display(21)' href='#'>
	        	Loaded - 2014
	        </a><br>
	        
	        <hr>
	        	<b>Experiments:</b><br>
            <a onClick='display(13)' href='#'>
	        	Arbitrio - 2013
	        </a><br>
	    <a onClick='display(25)' href='#'>
	        	Simulator_238 - 2014
	        </a><br>
	        
	        	More coming soon.
    </div>
    <div class="grid-3 pad" id="inspiration">
        <h2>WebDev/Html5/Node</h2>
	        <p>
	           Unfortunately, the nature of the web is constantly evolving making it difficult to archive projects, as there really is no end-product. Most of my web development projects cannot be displayed as a result, however following list is of those I can.
	        </p>

        <a onClick='display(14)' href='#'>
	        	MyRightToPlay.com - 2010 till 2013
	        </a>
	        <hr>
	        	<b>Experiments:</b><br>
                
                
                <a onClick='display(17)' href='#'>
				Multiplayer Zombie Survival - 2014
	       		 </a><br>
	       	 <a onClick='display(22)' href='#'>
				Super Organ Donor - 2014
	       		 </a><br>
	       
	       	 
	        	More coming soon.

    </div>

    <div class="grid-3 pad" id="inspiration">
        <h2>Pebble</h2>

            <a onClick='display(18)' href='#'>
	        	Mr.Game and Watch - 2014
	        </a><br>
 		
	          <hr>
	        	<b>Experiments:</b><br>
                <a onClick='display(20)' href='#'>
				Stela - 2014
	       		 </a><br>
	        	More coming soon.

    </div>

</div>