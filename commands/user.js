const Discord = require('discord.js');

module.exports = {
	name: 'user',
	description: 'user',
	execute(message, args) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			message.channel.send(`Username: ${member.user.tag}\nID: ${member.id}`);
	
		}
		else {
			return message.channel.send(`Username: ${message.author.username}\nID: ${message.author.id}`);
		}
	},
};
