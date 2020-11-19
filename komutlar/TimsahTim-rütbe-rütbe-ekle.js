const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<a:yaplandrma:771056975609462854> ・ **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);

    
    var roleId = message.mentions.roles.first(), targetInvite = Number(args[1]);
  /*  if(!message.guild.roles.cache.has(roleId)) return message.reply("no such role.");*/
    if(isNaN(targetInvite)) return message.reply("<:Yanl:771056893217079357>  ・  Rütbe Eklemek İçin Bir Sayı Belirtin.");

    const db = new Database("./Servers/" + message.guild.id, "Rewards");

    var rewards = db.get("rewards") || [];
    rewards.push({
        Id: roleId.id,
        Invite: targetInvite
    });

    db.set("rewards", rewards);
const embed = new Discord.MessageEmbed()
.setDescription(`<:doru:771056901742919741>  ・  ${roleId} **Rolünü Ulaşabilmek İçin Toplam ${targetInvite} Davet Yapmaları Gerekmektedir...**`)
.setColor("BLUE")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-rütbe-ekle","rütbeekle"],
  permLevel: 0
};
exports.help = {
  name: 'rütbe-ekle',
  description: 'Bir Ödül Rütbesi Koyarsınız.',
  usage: 'g!rütbe-ekle'
};
