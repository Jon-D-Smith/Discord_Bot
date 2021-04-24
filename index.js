const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fetch = require("node-fetch");
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (message.content.toLowerCase() === '!much-help') {
        message.channel.send(`Commands: 
!doge - Get current dogecoin prices.
        
Please do not spam this bot as I am using a free api and don't want to DDOS them`)
    } else if (message.content.toLowerCase() === '!doge') {

        const response = await fetch('https://api.coinpaprika.com/v1/tickers/doge-dogecoin');
        const data = await response.json();
        message.channel.send(`The current price of doge is ${data.quotes.USD.price}. To the moon!
        
        https://tenor.com/view/dogecoin-doge-wow-crypto-rocket-gif-14161744
        `)
    }
    console.log(message.content);
})

client.login(process.env.TOKEN || config.token);

