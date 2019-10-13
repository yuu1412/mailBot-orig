const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
}); 

client.on('message', message => {
    if (message.substring(0, 1) == 'mj!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Please visit <https://toyhou.se/1787487> for documentation!'
                });
            break;
            // Just add any case commands if you want to..
         }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
