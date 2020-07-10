const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'server',
	execute(message, args) {

		let roles = message.guild.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join("\n ") || 'none';
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nAll Roles: ${roles}`);
	},
};