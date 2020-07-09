const Discord = require('discord.js');
const imageapi = require("imageapi.js");
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'reddit',
	description: 'reddit',
	execute(message, args) {
		async function sub() {
			const args = message.content.slice(8);
			let img = await imageapi(`${args}`);
			message.channel.send(new MessageAttachment(img));
		}

		sub();
	},
};