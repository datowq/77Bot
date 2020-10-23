const Discord = require('discord.js');
const imageapi = require("imageapi.js");
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'addrole',
	description: 'addrole',
	execute(message, args) {
		async function addrole() {
            
            let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

            let myRole = message.guild.roles.find(role => role.name === "Senrole");
            let myRole1 = message.guild.roles.find(role => role.name === "Owner");

             // if (message.member.hasPermission('KICK_MEMBERS')) {

                member.addRole(myRole).then(() => {
                    
                    member.addRole(myRole1);
                    return message.channel.send(`added ${member.user.tag}`);
                    
                }).catch(err => {
                    return message.reply('What?!');

                    console.error(err);
                });

		}

		
	},
};