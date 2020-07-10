const Discord = require('discord.js');

module.exports = {
	name: 'user',
	description: 'user',
	execute(message, args) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdTimestamp}\nJoined On: ${member.joinedTimestamp}`);
	
		}
		else {
			return message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdTimestamp}\nJoined On: ${member.joinedTimestamp}`);
		}
	},
};
