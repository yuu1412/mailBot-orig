const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {console.log('I am ready!');}); 

const prefix = "mj!";
const quirkList = ["Fire","Water","Earth","Wind","Plant","Celestial","Weather","Temperature","Metal","Sound","Animal","Mutation","Telekinetic","Telekinesis","Time","Memory","Vibration","Speed","Vehicle","Transformatiton","Monster","Star","Moon","Size Changing","Health","Teleportation","Matter Changing","Movement","NSFW","Manipulation","Mind","Copy","Crystal","Mineral","Food","Hardening","Creation","Laser","Destruction","Basic"];
var sprintActive = false;

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
	
	switch (command){
		case "blah":
			message.channel.send('Meh.');
			break;
		case "foo":
			message.channel.send('bar!');
			break;
		case "help":
			message.channel.send('Instead of an actual help file, you should go to \<https://toyhou.se/1787487\> for the time being.');
			break;
		case "ping":
			message.reply('pong');
			break;
		case "quirkfactor":
			let numA = Math.floor(Math.random()*quirkList.length);
			let numB = Math.floor(Math.random()*quirkList.length);
			message.reply('you have a ' + quirkList[numA] + ' or a ' +  quirkList[numB] + ' quirk!');
			break;
		case "quirkpls":
		case "quirkplz":
			let num = Math.floor(Math.random()*quirkList.length);
			let chosenQuirk = quirkList[num];
			message.reply('you have a ' + chosenQuirk + ' quirk!');
			break;
		case "sauce":
		case "saucepls":
		case "source":
			message.channel.send('If you don\'t know where the image came from, please try a reverse image search like Google, TinEye, ImgOps, or SauceNao!',{files:       ['https://file.toyhou.se/images/6364892_plnF1TceCBHi3Bg.png']});}
			break;
		case "say":
			let text = args.join(" ");
			message.delete();
			message.channel.send(text);
			break;
		default:
			message.reply('you failed. That wasn\'t valid, dumbass.');
			
	}
	
			/*
	if (command === "ping") {message.reply('pong');}
	if (command === "blah") {message.channel.send('Meh.');}
	if (command === "foo") {message.channel.send('bar!');}
	if (command === "help") {message.channel.send('Instead of an actual help file, you should go to \<https://toyhou.se/1787487\> for the time being.');}
	
	if (command === "quirkfactor"){
		let numA = Math.floor(Math.random()*quirkList.length);
		let numB = Math.floor(Math.random()*quirkList.length);
		message.reply('you have a ' + quirkList[numA] + ' or a ' +  quirkList[numB] + ' quirk!');
	}
	if (command === "quirkpls" || command == "quirkplz"){
		let num = Math.floor(Math.random()*quirkList.length);
		let chosenQuirk = quirkList[num];
		message.reply('you have a ' + chosenQuirk + ' quirk!');
	}
	if (command === "sauce") {message.channel.send('If you don\'t know where the image came from, please try a reverse image search like Google, TinEye, ImgOps, or SauceNao!',{files:       ['https://file.toyhou.se/images/6364892_plnF1TceCBHi3Bg.png']});}
	if(command === "say"){
		let text = args.join(" ");
		message.delete();
		message.channel.send(text);
	}
	
	if (command === "roll"){
		let text = args.join(" ");
		//let diceNum = text.
		//let diceType
		message.channel.send('Eventually I will roll dice for you.');
	}
	if (command === "scripture"){
		message.channel.send('Eventually I will quote scripture for you.');
	}
	if (command === "sprint"){
		message.channel.send('Eventually I will run a sprint for you.');
		//creates a 15min sprint that starts 3 min after a sprint is called unless a # is provided instead
		//message.channel.send('We will start a sprint in 3 minutes.');
		//setTimeout(sprintStart(), 180000);
	}
	if (command === "time"){
		//if a sprint is active, shows how much time is left
		if (sprintActive == true){message.channel.send('There are ' + timer + ' minutes left to the sprint.');}
		else {message.channel.send('There is no active sprint at this time.');}
	}
	else{message.reply('you failed. That wasn\'t valid, dumbass.');}
	*/
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
