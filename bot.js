const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
}); 

// const prefix = "mj!";

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (command === "ping") {message.reply('pong');}
    if (command === "sauce") {
        message.channel.send('Hey',{files:       ['https://file.toyhou.se/images/6364892_plnF1TceCBHi3Bg.png']});
    }
    if(command === "say"){
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
