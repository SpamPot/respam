const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("farm33")
setInterval(function() {
channel.send(`creditcreditgg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
