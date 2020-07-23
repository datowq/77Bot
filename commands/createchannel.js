const Discord = require('discord.js');

module.exports = {
	name: 'createchannel',
	description: 'createchannel',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_CHANNELS')) {
			
			var str = message.content.slice(15);
			var secondstr = str.slice(str.indexOf(' ')+1);
			var thirdstr = secondstr.slice(secondstr.indexOf(' ')+1);

			var type = str.slice(0, str.indexOf(' '));
			var name = secondstr.slice(0, secondstr.indexOf(' '));
			var nsfwlabel =  secondstr.slice(secondstr.indexOf(' ')+1);
			
			message.channel.send(nsfwlabel);

			if(nsfwlabel === null || nsfwlabel === ' ') {

				nsfwlabel = false;

			}

			// Create a new channel with permission overwrites
			message.guild.channels.create(name, {
				type: type,
				nsfw: nsfwlabel,
				permissionOverwrites: [
				{
					id: message.author.id,
					deny: ['VIEW_CHANNEL'],
				},
				],
			})

			/*if(type === "voice" || type === "Voice" || type === "v" || type === "V") {

				// Create a new channel with permission overwrites
				message.guild.channels.create(name, {
					type: 'voice',
					nsfw: nsfwlabel,
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
					nsfw: nsfwlabel,
					permissionOverwrites: [
					{
						id: message.author.id,
						deny: ['VIEW_CHANNEL'],
					},
					],
				})

			}
*/
		}

		else {

			return message.reply("you don't have perms lmao");

		}

	},
};