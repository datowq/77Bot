const Discord = require('discord.js');
const imageapi = require("imageapi.js");
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'addrole',
	description: 'addrole',
    run: async (bot, message, args) => {
		
            
            let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
            
           

            message.member.roles.add("769281244302147616").then(() => {
                    message.member.roles.add("769281244302147616");
                    message.member.roles.add("769281244302147616");
                    return message.channel.send(`added ${member.user.tag}`);
                    
                }).catch(err => {
                    return message.reply('What?!');

                    console.error(err);
                });

		

		
	},
};