const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'mj!';

client.on('ready', () => {
    console.log('I am ready!');
}); 

client.on('message', message => {
   if (message.content === 'mj!ping') {message.reply('pong');}
   if (message.content === 'mj!sauce') {
        message.channel.send('Hey',{files:       ['https://file.toyhou.se/images/6364892_plnF1TceCBHi3Bg.png']});
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
