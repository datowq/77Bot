const Discord = require('discord.js');
const imageapi = require("imageapi.js");
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'kyaru',
	description: 'kyaru',
	execute(message, args) {
		async function kyaru() {
			let img = await imageapi("kyaru");
			message.channel.send(new MessageAttachment(img));
		}

		kyaru();
	},
};