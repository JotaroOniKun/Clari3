const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor('FF0000')
  .addField("Coins", "Displays how many coins you have; Usage: c!coins [@user]")
  .addField("Level", "Shows your current level; Usage: c!level [@user]")
  .addField("Pay", "Allows you to give coins to another user; Usage: c!pay <@user> [amount]")
  .addField("Help", "Displays this help message")
  .addField("Report", "Report another user; Usage: c!report <@user> [Reason]")
  .addField("Tempmute", "Temporarily mutes a user; Usage: c!tempmute <@user> [Time in seconds]; NOTE: This command only works for staff")
  .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

  message.channel.send(helpEmbed)

}

module.exports.help = {
  name: "help"
}