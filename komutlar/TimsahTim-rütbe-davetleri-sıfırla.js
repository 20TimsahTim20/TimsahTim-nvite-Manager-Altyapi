const Discord = require("discord.js");
const Database = require("../Helpers/Database");


exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<a:yaplandrma:771056975609462854> ・ **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);

    const db2 = new Database("./Servers/" + message.guild.id, "Invites");

db2.set("invites")
message.channel.send("<:doru:771056901742919741>  ・  Tüm Kullanıcıların Davetleri Sıfırlandı!")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davetlerisıfırla"],
  permLevel: 0
};
exports.help = {
  name: 'davetleri-sıfırla',
  description: 'Sunucunuzdaki Tüm Üyelerin Davetleri Sıfırlanır.',
  usage: 'g!davetleri-sıfırla'
};

