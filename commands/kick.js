const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, args) {
		const user = message.mentions.users.first();

        if (user) {
            let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
            if (message.member.hasPermission('KICK_MEMBERS')) {

                    member.kick('Bye').then(() => {
                        return message.reply(`bye bye @${user.tag}`);
                    })
                    .catch(err => {
                        return message.reply('what?!');

                        console.error(err);
                    });
            }
            else {
                return message.reply("you don't have perms lmao");
            }
        }
        else {
        return message.reply("you didn't mention the user to kick!");
        }
	},
};