const Discord = require('discord.js');

module.exports = {
	name: 'createchannel',
	description: 'createchannel',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_CHANNELS')) {
			
			var str = message.content.slice(15);
			var type = str.slice(0, str.indexOf(' '));
			var nextone = str.slice(str.indexOf(' '));
			var name = nextone.slice(0, nextone.indexOf(' '));
			var nsfwlabel = nextone.slice(nextone.indexOf(' '));
			
			return message.channel.send(nsfw);

			if(type === "voice" || type === "Voice" || type === "v" || type === "V") {

				// Create a new channel with permission overwrites
				message.guild.channels.create(name, {
					type: 'voice',
					nsfw: nsfw,
					permissionOverwrites: [
					{
						id: message.author.id,
						deny: ['VIEW_CHANNEL'],
					},
					],
				})

			}

			if(type === "text" || type === "Text" || type === "t" || type === "T") {
				
				// Create a new channel with permission overwrites
				message.guild.channels.create(name, {
					type: 'text',
					nsfw: nsfw,
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