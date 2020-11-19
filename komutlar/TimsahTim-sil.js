const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
let sa = await db.fetch(`sillog_${message.guild.id}`)
      let Gezend = args[0]

  if (!Gezend) return message.reply('<:Yanl:771056893217079357>  ・  Bir Sayı Girmelisin!')
  if (isNaN(Gezend)) return message.reply('<:Yanl:771056893217079357>  ・  Bir Rakam Girmelisin!')
  if (Gezend < 0) return message.reply('<:Yanl:771056893217079357>  ・  0 Sayısından Küçük Değer Belirtemezsin!')
  if(Gezend > 100) return message.reply('<:Yanl:771056893217079357>  ・  100 Sayısından Büyük Değer Belirtemezsin!')
  
  
  message.channel.bulkDelete(Gezend).then(() =>  {
    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`
<a:yaplandrma:771056975609462854>  ・  Mesajları Silen Yetkili : ${message.author.tag}

<a:yaplandrma:771056975609462854>  ・  Mesajları Silinen Kanal : ${message.channel}

<a:yaplandrma:771056975609462854>  ・  Kanalda Mesaj Silinen Miktar : **${Gezend}**

`)
 message.channel.send(embed).then(message => message.delete({timeout:7000})); 

  })
  
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clear","temizle"],
  permLevel: 1
};

exports.help = {
  name: 'sil'
};