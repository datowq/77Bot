const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'server',
	execute(message, args) {

		let roles = message.guild.roles.cache
            .filter(r => r.id !== message.guild.id)
			.map(r => r.name).join(" | ") || 'none';
			
		message.channel.send(`Server: ${message.guild.name}\nMembers: ${message.guild.memberCount}\nCreated: ${message.guild.region}\nTotal members: ${message.guild.region}\nRole List: ${roles}`);

	},
};