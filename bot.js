const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
}); 

client.on('message', message => {
   if (message.content === 'mj!ping') {message.reply('pong');}
   if (message.content === 'mj!help') {
       sendMessage({
           to: channelID,
           message: 'Help Me!'
       });}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
