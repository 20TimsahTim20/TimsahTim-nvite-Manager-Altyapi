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

    var victim = message.mentions.members.size > 0 ? message.mentions.members.first().id : args.length > 0 ? args[0] : undefined;
    if(!victim) return message.reply("<:Yanl:771056893217079357>  ・  Bir Kullanıcının ID Belirtin.");
    victim = message.guild.member(victim);
    if(!victim) return message.reply("<:Yanl:771056893217079357>  ・  İD Sini Yazdığınız Kişi Sunucuda Bulunmamaktadır...");

    var num = Number(args[1]);
    if(isNaN(num)) return message.reply("<:Yanl:771056893217079357>  ・  Bonus Olacak Sayıyı Belirtin.");
    const db = new Database("./Servers/" + message.guild.id, "Invites");

    var bonus = (db.add(`invites.${victim.id}.bonus`, num) || 0), total = (db.get(`invites.${victim.id}.total`) || 0);
    message.channel.send(`<:doru:771056901742919741>  ・  ${victim} Adlı Kişiye ${num} Civarı Bonus Eklendi.`);

    global.onUpdateInvite(victim, message.guild.id, total + bonus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bonusekle"],
  permLevel: 0
};
exports.help = {
  name: 'bonus-ekle',
  description: 'Bir Kullanıcıya Bonus Eklersiniz.',
  usage: 'g!bonus-ekle'
};
