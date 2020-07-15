const Discord = require('discord.js');

const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'die',
	description: 'die',
	execute(message, args) {
        message.channel.delete()
    },
};