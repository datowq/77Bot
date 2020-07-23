const Discord = require('discord.js');

module.exports = {
	name: 'createchannel',
	description: 'createchannel',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_CHANNELS')) {
			
			var str = message.content.slice(15);
			var secondstr = str.slice(str.indexOf(' '));
			var thirdstr = secondstr.slice(secondstr.indexOf(' '));

			var type = str.slice(0, str.indexOf(' '));
			var name = secondstr.slice(0, secondstr.indexOf(' '));
			var nsfwlabel =  thirdstr.slice(thirdstr.indexOf(' '));
			
			return message.channel.send(str + '.\n' + secondstr  + '.\n' + thirdstr + '.\n' +  type + '.\n' +  name + '.\n' +  nsfwlabel);

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