const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'jon') {
        message.channel.send(`Did someone say Jon? Which one? There's at least two of them. Maybe more at this point. (Jon Smith is better though)`)
    }
    console.log(message.content);
})

client.login(config.token);
