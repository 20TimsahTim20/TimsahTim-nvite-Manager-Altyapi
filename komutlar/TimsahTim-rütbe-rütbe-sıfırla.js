const Discord = require("discord.js");
const Database = require("../Helpers/Database");


exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<a:yaplandrma:771056975609462854> ・ **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
const db = new Database("./Servers/" + message.guild.id, "Rewards");
    const db2 = new Database("./Servers/" + message.guild.id, "Invites");
db.set("rewards");
message.channel.send("<:doru:771056901742919741>  ・  Rütbeler Sıfırlandı...")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-rütbe-sıfırla","rütbesıfırla"],
  permLevel: 0
};
exports.help = {
  name: 'rütbe-sıfırla',
  description: 'Ödül Rütbelerinin Hepsini Sıfırlarsınız.',
  usage: 'g!rütbe-sıfırla'
};

