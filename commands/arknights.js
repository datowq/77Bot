const Discord = require('discord.js');
const imageapi = require("imageapi.js");
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'arknights',
	description: 'arknights',
	execute(message, args) {
		async function arknights() {
			let img = await imageapi("artknights");
			message.channel.send(new MessageAttachment(img));
		}

		arknights();
	},
};