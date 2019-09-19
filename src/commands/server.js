module.exports = {
    name: 'server',
    description: 'Request general server information.',
    execute(message, channel, args){
        message.channel.send(`Server: ${message.guild.name} \nTotal Members: ${message.guild.memberCount}`);
    },
};