const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'user',
	description: 'user',
	run: async (client, message, args) => {
		const user = message.mentions.users.first();
		async (bot, message, args) => {
			let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		}
		const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join(", ") || 'none';
		if (user) {
			message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${roles}`);
	
		}
		else {
			const user = message.author;
			return message.channel.send(`Tag: ${member.user.tag}\nNickname: ${member.displayName}\nID: ${member.id}\nAccount Created: ${member.user.createdAt}\nJoined On: ${member.joinedAt}\nRoles: ${roles}`);
		}
	},
};
