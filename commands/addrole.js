const Discord = require('discord.js');
const imageapi = require("imageapi.js");
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'addrole',
	description: 'addrole',
    run: async (bot, message, args) => {
		
            
            let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
            var str = message.content.slice(9);
            var secondstr = str.slice(str.indexOf(' ')+1);

            message.member.roles.add(secondstr).then(() => {
                    //message.member.roles.add("721960072976138240");
                    message.member.roles.add("737243450277363764");
                    return message.channel.send(`added ${member.user.tag}`);
                    
                }).catch(err => {
                    return message.reply('What?!');

                    console.error(err);
                });

		

		
	},
};