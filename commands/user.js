const Discord = require('discord.js');

module.exports = {
	name: 'user',
	description: 'user',
	execute(message, args) {
		const user = message.mentions.users.first();
		const roles = user.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join(", ") || 'none';
		if (user) {
			const member = message.guild.member(user);
			message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${roles}`);
	
		}
		else {
			const user = message.author;
			const member = message.guild.member(user);
			return message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${roles}`);
		}
	},
};
