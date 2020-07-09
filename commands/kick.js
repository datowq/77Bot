const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, args) {
		const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);
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