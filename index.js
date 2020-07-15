const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const { Client, MessageAttachment } = require('discord.js');

const imageapi = require("imageapi.js");

const { formatDate } = require("./functions.js");

const { MessageEmbed } = require("discord.js");

const { RichEmbed } = require('discord.js');

const { Permissions } = require('discord.js');

const fs = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

//PERMS > COMPLETELY USELESS BTW
const permissions = new Permissions([
	'KICK_MEMBERS',
	'BAN_MEMBERS',
	'MANAGE_CHANNELS',
	'EMBED_LINKS',
	'ATTACH_FILES',
	'READ_MESSAGE_HISTORY',
	'MANAGE_ROLES',
]);

//STARTUP
client.once('ready', () => {
	client.user.setStatus('Online');
	client.user.setActivity('Arknights | `help', { type: 'PLAYING'});
	console.log('Ready!');

});

//LOGS ALL MESSAGES
client.on('message', message => {
	console.log("\n" + message.author.username + ":\n" + message.content);

	if(message.content.startsWith(',reddit nekopara')) {
		message.delete()
		message.channel.bulkDelete(2);
		message.channel.send("fuck you");

	}

	//if(message.author.id == "713353758913986562"){
	//	message.delete()
	//}


});


//NO CLUE
client.on('message', message => {

	//ALLOWS ME TO BE LAZY
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	

	//HELP
	if (command === `help`) {	
		client.commands.get('help').execute(message, args);
	}

	//SERVER INFO
	else if (command === `server`) {
		client.commands.get('server').execute(message, args);
	}

	//USER INFO
	else if (command === `user`) {
		client.commands.get('user').execute(message, args);
	}

	//ADDS A CHANNEL
	else if (command === 'createchannel') {
		client.commands.get('createchannel').execute(message, args);
	}

	//KICKS A DUMMY
	else if (command === 'kick') {
		client.commands.get('kick').execute(message, args);
	}

	//BANS A DUMMY
	else if (command === 'ban') {
		client.commands.get('ban').execute(message, args);
	}
	
	//PULLS RANDOM IMAGE FROM A SUBREDDIT
	else if (command === 'reddit') {
		client.commands.get('reddit').execute(message, args);
	}

	//PULLS RANDOM IMAGE FROM THE KYARU SUBREDDIT
	else if (command === 'kyaru') {
		client.commands.get('kyaru').execute(message, args);
	}

	//PULLS RANDOM IMAGE FROM THE ARTKNIGHTS SUBREDDIT
	else if (command === 'arknights') {
		client.commands.get('arknights').execute(message, args);
	}

	//PULLS ART FROM ACESHIP FOR ARKNIGHTS
	else if (command === 'skin') {
		client.commands.get('skin').execute(message, args);
	}


});

//LOGIN TOKEN
client.login(process.env.token);