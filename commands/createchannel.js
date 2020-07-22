const Discord = require('discord.js');

module.exports = {
	name: 'createchannel',
	description: 'createchannel',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_CHANNELS')) {
			
			var str = message.content.slice(15);
			var type = str.slice(0, str.indexOf(' '));
			var name = str.slice(str.indexOf(' '));
			
			// Create a new channel with permission overwrites
			message.guild.channels.create(name, {
				type: type,
				permissionOverwrites: [
				{
					id: message.author.id,
					deny: ['VIEW_CHANNEL'],
				},
				],
			})

		}

		else {

			return message.reply("you don't have perms lmao");

		}

	},
};