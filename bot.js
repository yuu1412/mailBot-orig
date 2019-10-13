const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {console.log('I am ready!'); client.user.setActivity("the world burn", {type: "WATCHING"})}); 

const prefix = "mj!";
//var sprintActive = false;
 
var fs = require('fs');
var quirkList = fs.readFileSync('quirksList.txt', 'utf8').toString().split("\n");
var promptsList = fs.readFileSync('genres.txt', 'utf8').toString().split("\n");


/*
fuction sprintStart(){
	sprintActive = true;
	message.channel.send('The sprint has begun! Get writing!');
}
function sprintEnd(){
	sprintActive = false;
}
*/

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if (command === "ping") {message.reply('pong');}
	else if (command === "blah") {message.channel.send('Meh.');}
	else if (command === "foo") {message.channel.send('bar!');}
	else if (command === "help") {message.channel.send('Instead of an actual help file, you should go to \<https://toyhou.se/1787487\> for the time being.');}
	
	else if (command === "quirkfactor"){
		let numA = Math.floor(Math.random()*quirkList.length);
		let numB = Math.floor(Math.random()*quirkList.length);
		message.reply('you have a ' + quirkList[numA] + ' or a ' +  quirkList[numB] + ' quirk!');
	}
	else if (command === "quirkpls" || command == "quirkplz"){
		let num = Math.floor(Math.random()*quirkList.length);
		let chosenQuirk = quirkList[num];
		message.reply('you have a ' + chosenQuirk + ' quirk!');
	}
	else if (command === "sauce") {message.channel.send('If you don\'t know where the image came from, please try a reverse image search like Google, TinEye, ImgOps, or SauceNao!',{files:       ['https://file.toyhou.se/images/6364892_plnF1TceCBHi3Bg.png']});}
	else if(command === "say"){
		let text = args.join(" ");
		message.delete();
		message.channel.send(text);
	}
	else if (command === "prompt"){
		let num = Math.floor(Math.random()*promptsList.length);
		message.reply('maybe consider a '+ promptsList[num] + ' AU?');
		//message.reply('I\'ll give you a prompt in the future.');
	}
	else if (command === "prompts"){
		let numA = Math.floor(Math.random()*promptsList.length);
		let numB = Math.floor(Math.random()*promptsList.length);
		message.reply('maybe consider a '+ promptsList[numA] + ' and ' + promptsList[numB] + ' AU?');
		//message.reply('I\'ll give you two prompts in the future.');
	} 
	
	else if (command === "roll"){
		let text = args.join(" ");
		//let diceNum = text.
		//let diceType
		message.channel.send('Eventually I will roll dice for you.');
	}
	else if (command === "scripture"){
		message.channel.send('Eventually I will quote scripture for you.');
	}
	else if (command === "sprint"){
		message.channel.send('Eventually I will run a sprint for you.');
		//creates a 15min sprint that starts 3 min after a sprint is called unless a # is provided instead
		//message.channel.send('We will start a sprint in 3 minutes.');
		//setTimeout(sprintStart(), 180000);
	}
	else if (command === "time"){
		message.channel.send('When the sprint functionality is working, this will do something.');
		//if a sprint is active, shows how much time is left
		//if (sprintActive == true){message.channel.send('There are ' + timer + ' minutes left to the sprint.');}
		//else {message.channel.send('There is no active sprint at this time.');}
	}
	else{message.reply('you failed. ' + command + ' wasn\'t a valid command, dumbass.');}
	
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
