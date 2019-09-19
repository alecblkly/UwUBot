module.exports = {
    name: 'about',
    description: 'Provides information about the bot.',
    execute(message, channel, args){
        channel.send(`Hey! I am uWu. \nA fun little discord bot that speaks uwu. \nProject URL: https://github.com/alecblkly/UwUBot`);
    },
};