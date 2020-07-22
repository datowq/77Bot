const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ban',
	description: 'ban',
	run: async (client, message, args) => {
		let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

			if (member) {


				if (message.member.hasPermission('BAN_MEMBERS')) {

						member.ban('Bye').then(() => {
							return message.reply(`bye bye @${user.tag}`);
						})
						.catch(err => {
							return message.reply('What?!');

							console.error(err);
						});
				}
				else {
					return message.reply("you don't have perms lmao");
				}
			}
		else {
			return message.reply("you didn't mention the user to ban!");
		}
	},
};