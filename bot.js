const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
}); 

const prefix = "mj!";

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (command === "ping") {message.reply('pong');}
    if (command === "foo") {message.channel.send('bar');}
    if (command === "help") {message.channel.send('Instead of an actual help file, you should go to <https://toyhou.se/1787487> for the time being.');}
    
    if (command === "sauce") {
        message.channel.send('Hey',{files:       ['https://file.toyhou.se/images/6364892_plnF1TceCBHi3Bg.png']});
        message.channel.send('If you don\'t know where the image came from, please try a reverse image search like Google, TinEye, ImgOps, or SauceNao!');
    }
    if(command === "say"){
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
