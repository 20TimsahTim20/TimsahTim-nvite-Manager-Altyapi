const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites`) || {};

    var list = Object.keys(data).map(_data => {
        return {
            Id: _data,
            Value: (data[_data].total || 0) + (data[_data].bonus || 0)
        };
    }).sort((x, y) => y.Value - x.Value);

    var embed = new Discord.MessageEmbed()
        .addField("Davetler", `
    ** **${list.splice(0, 10).map((item, index) => `\`${index + 1}.\` <@${item.Id}>: \`${item.Value} Davet\``).join("\n")}
    `);

    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["topinvite","topdavet","top-davet","top-invite"],
  permLevel: 0
};
exports.help = {
  name: 'top',
  description: 'Davet Sıralamasını Gösterir.',
  usage: 'g!top'
};
