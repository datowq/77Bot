const Discord = require('discord.js');

module.exports = {
	name: 'createchannel',
	description: 'createchannel',
	execute(message, args) {
		if (message.member.hasPermission('MANAGE_CHANNELS')) {
			const channelname = message.content.slice(15);
			message.guild.channels.create(`${channelname}`);
		}
		else {
			return message.reply("you don't have perms lmao");
		}
	},
};