const Discord = require('discord.js');

const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args) {
		message.react(':white_check_mark:');
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#922b3e')
			.setTitle('77 Bot Help!')
			.setURL('https://www.twitch.tv/pinguefy')
			.attachFiles(['./icon.png'])
			.setThumbnail('attachment://icon.png')
			.setDescription('```diff\n->  `server```spits out some server info\n```diff\n->  `user {username}```spits out some user info\n```diff\n->  `createchannel {channelname}```creates a channel of your liking\n```diff\n->  `kick {username}```bye bye :)\n```diff\n->  `ban {username}```bye bye big boy\n```diff\n->  `kyaru```sends a random image of the best catgirl known to man```diff\n->  `arknights```sends a random image from the best game known to man\n')

		message.author.send(exampleEmbed);
	},
};