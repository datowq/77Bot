const Discord = require('discord.js');
const imageapi = require("imageapi.js");
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'reddit',
	description: 'reddit',
	execute(message, args) {
		async function sub() {
			const args = message.content.slice(8);

			if(message.author.tag == 'neeko#3127' ||  message.author.tag == 'vvxrd#7777' && args == 'gay' || args == 'loli' || args == 'nekopara' || args == 'hentai') {

				return message.channel.send("just pls no, ty :>");

			}
			let img = await imageapi(`${args}`);
			message.channel.send(new MessageAttachment(img));
		}

		sub();
	},
};