const Discord = require('discord.js');

module.exports = {
	name: 'createchannel',
	description: 'createchannel',
	execute(message, args) {

		if (message.member.hasPermission('MANAGE_CHANNELS')) {
			
			var str = message.content.slice(15);
			var secondstr = str.slice(str.indexOf(' ')+1);
			var thirdstr = secondstr.slice(secondstr.indexOf(' ')+1);
			var fourthstr = thirdstr.substring(thirdstr.indexOf(' ')+1);

			var type = str.slice(0, str.indexOf(' '));
			var name = secondstr.slice(0, secondstr.indexOf(' '));
			var nsfwlabel =  thirdstr.slice(0, thirdstr.indexOf(' '));
			var desc = fourthstr;
			
			if (nsfwlabel === 'nsfw') {

				nsfwlabel = true;

			}

			if (nsfwlabel != 'false' || nsfwlabel != 'true' || nsfwlabel === 'nsfw') {

				nsfwlabel = false;
				desc = thirdstr.substring(0);

			}

			// Create a new channel with permission overwrites
			message.guild.channels.create(name, {
				type: type,
				nsfw: nsfwlabel,
				topic: desc,
			})

		}

		else {

			return message.reply("you don't have perms lmao");

		}

	},
};