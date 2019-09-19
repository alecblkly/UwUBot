// Imports
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, channelID } = require('./config.json');

// Declare variables
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

let BOT_FRIENDLY_CHANNEL;

// When the bot is ready
client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`);

    // UwU's Paradise channel
    BOT_FRIENDLY_CHANNEL = client.channels.get(channelID);
});


client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift();

    if(!client.commands.has(command)) return;

    try{
        client.commands.get(command).execute(message, BOT_FRIENDLY_CHANNEL, args);
    }catch(error){
        console.log(error);
        BOT_FRIENDLY_CHANNEL.send(`Unrecognized command: ${command}`);
    }
});

client.login(token);