const Discord = require("discord.js"); //Biblioth�que Javascript de Discord

const PREFIX = "::";	//Ce qu'il y a au d�but de la commande, exemple ici : "-:ping"
const PREFIXCOMMAND = "//";

var bot = new Discord.Client(); // C'est pour dire que le bot est comme un utilisateur au serveur (normalement c'est �a, je sais plus, mais c'est obligatoire en gros, cherche pas xD)


//ecrit dans la console quand le bot est pret
bot.on("ready", function () {
    console.log("Ready")
	bot.user.setGame(":: + emoji's name");
	bot.user.setStatus("online");
})


bot.on("message", function (message) {
    //ignore son propre message (i guess ? c'est dur d'expliquer)
    if (message.author.equals(bot.user)) return;
	
	if (message.content.startsWith(PREFIXCOMMAND)){
		var args = message.content.substring(PREFIXCOMMAND.length).split(" ");

		switch (args[0].toLowerCase()) {			
			case "random":
				const emojiList = bot.emojis.map(e=>e.toString()).join("#");
				var ListEmoji = emojiList.split("#");
				randemo = Math.floor((Math.random() * ListEmoji.length));
				message.delete();
				message.reply(ListEmoji[randemo]);
				break
		}
	}
	

    //Si ne commence pas par le PREFIX, ignore
    if (!message.content.startsWith(PREFIX)) return;

    //s�pare les mots de la phrase (ne compte pas le PREFIX)
    var args = message.content.substring(PREFIX.length).split(" ");

	const emoji = bot.emojis.find("name", args[0]);
	if (emoji != null){
		message.delete();
		message.reply(`${emoji}`);
	}
});

//connecte le bon bot
bot.login(process.env.BOT_TOKEN)

//const emojiList = bot.emojis.map(e=>e.toString()).join("#");			//message.guild.emojis.map(e=>e.toString()).join("#");
	//	var ListEmoji = emojiList.split("#");
	//	for(var i=0;i<ListEmoji.length; i++){
	//		message.channel.send(ListEmoji[i]);
	//	}