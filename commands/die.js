const Discord = require('discord.js');

const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'perish',
	description: 'perish',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_CHANNELS')) {
			message.channel.delete()
		}
		
    },
};