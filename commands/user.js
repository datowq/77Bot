const Discord = require('discord.js');

module.exports = {
	name: 'user',
	description: 'user',
	execute(message, args) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			const roles = member.roles.cache;
			const roles = user.roles.cache
            .filter(r => r.id !== user.id)
            .map(r => r.name).join(", ") || 'none';
			message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${member.roles}`);
	
		}
		else {
			const user = message.author;
			const member = message.guild.member(user);
			const roles = user.roles.cache
            .filter(r => r.id !== user.id)
            .map(r => r.name).join(", ") || 'none';
			return message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${roles}`);
		}
	},
};
