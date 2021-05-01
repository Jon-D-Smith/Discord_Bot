const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require('./config.json');
const fetch = require("node-fetch");

let previousCost = 0;

const goodGifs = ["https://tenor.com/view/dogecoin-doge-wow-crypto-rocket-gif-14161744",
    "https://tenor.com/view/to-the-moon-space-fly-dog-gif-16917828",
    "https://tenor.com/view/dogecoin-notkdk3-stonks-crypto-doge-gif-20148669",
    "https://tenor.com/view/wallstreet-wallstreetbets-stocks-stonks-gme-gif-20129053"
]

const badGifs = ["https://tenor.com/view/digibyte-dgb-hodl-crypto-cryptocurrency-gif-20300554",
    "https://tenor.com/view/the-office-kevin-the-office-kevin-chili-doge-gif-21222158",
    "https://tenor.com/view/dogecoin-doge-wallstreetbets-stonks-stocks-gif-20855962",
    "https://tenor.com/view/tears-sad-shiba-crying-gif-10763884"
]



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
        if (previousCost <= data.quotes.USD.price) {
            const randomGood = Math.floor(Math.random() * goodGifs.length);
            message.channel.send(`The current price of doge is $${data.quotes.USD.price}. 
            The last time I checked for you, it was: $${previousCost}.
To the moon!
        
${goodGifs[randomGood]}`)
            previousCost = data.quotes.USD.price;
        } else {
            const randomBad = Math.floor(Math.random() * badGifs.length);

            message.channel.send(`The current price of doge is $${data.quotes.USD.price}. 
The last time I checked for you, it was:  $${previousCost}.
It's just a dip, HODL!
        
${badGifs[randomBad]}`)
            previousCost = data.quotes.USD.price;
        }
    }
    console.log(message.content);
})

client.login(process.env.TOKEN_DJS);

// client.login(config.token);



