const Discord = require('discord.js');

module.exports = {
	name: 'user',
	description: 'user',
	execute(message, args) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			const roles = member.roles.cache;
			message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${member.roles}`);
	
		}
		else {
			const user = message.author;
			const member = message.guild.member(user);
			const roles = member.roles.cache;
			return message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${member.roles}`);
		}
	},
};
