const Discord = require('discord.js');

module.exports = {
	name: 'createchannel',
	description: 'createchannel',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_CHANNELS')) {

			const channelname = message.content.slice(15);
			
			if(channelname === "voice" || channelname === "Voice" || channelname === "v" || channelname === "V") {

				// Create a new channel with permission overwrites
				message.guild.channels.create('new voice', {
					type: 'voice',
					permissionOverwrites: [
					{
						id: message.author.id,
						deny: ['VIEW_CHANNEL'],
					},
					],
				})

			}

			if(channelname === "text" || channelname === "Text" || channelname === "t" || channelname === "T") {
				
				// Create a new channel with permission overwrites
				message.guild.channels.create('new text', {
					type: 'text',
					permissionOverwrites: [
					{
						id: message.author.id,
						deny: ['VIEW_CHANNEL'],
					},
					],
				})

			}

		}

		else {

			return message.reply("you don't have perms lmao");

		}

	},
};