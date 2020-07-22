const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'server',
	execute(message, args) {

		let roles = message.guild.roles.cache
            .filter(r => r.id !== message.guild.id)
			.map(r => r.name).join(" | ") || 'none';
			
		message.channel.send(`Server: ${message.guild.name}\nOwner: ${message.guild.owner}\nTier: ${message.guild.premiumTier}\nMembers: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nRegion: ${message.guild.region}\nRole List: ${roles}`);

	},
};