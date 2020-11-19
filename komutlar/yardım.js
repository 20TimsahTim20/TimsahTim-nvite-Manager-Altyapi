const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["🔴","🔘"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
    .setTitle(`Gezend ・ Yardım Menüsü`)
      .setColor("BLUE")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`<a:hyqued3:770590906746142730> Gezend Botumuzu Eklemek İçin \`g!davet-et\` Yazabilirsiniz.`)
.addField(`__Ana Menü__`,` 🔴 `,true)
.addField(`__Davet Komutları__`,` 🔘 `,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:770590906746142730> \`g!davet-et\` | Gezend'i Sunucunuza Davet Edersiniz\n<a:hyqued3:770590906746142730> \`g!istatistik\` | Botun İstatistiklerini Gösterir\n<a:hyqued3:770590906746142730> \`g!komutlar\` | Botun Toplam Komutlarını Gösterir`)
  .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["🔴","🔘"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])

collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "🔘") {
    const TimsahTim = new Discord.MessageEmbed()
      .setColor("BLUE")
 .addField("**Davet Komutları**", `\n**g!**__rütbe-ekle @rol davet__ = **__Rütbe Ekler__** \n**g!**__rütbeler__ = **__Rütbeleri Gösterir 1 Den 10'a Kadar__** \n**g!**__rütbe-sıfırla__ = **__Rütbeyi Sıfırlar.__** \n**g!**__davetleri-sıfırla__ = **__Davetleri Sıfırlar.__** \n**g!**__top__ = **__Lider Tablosunu Gösterir.__** \n**g!**__davetlerim__ = **__Davetlerinizi Gösterir.__** \n**g!**__bonus-ekle__ = **__Bonus Ekler.__** \n**g!**__davet-kanal #kanal__ = **__Davet Kanalını Ayarlar.__** \n**g!**__davet-kanal-sıfırla__ = **__Davet Kanalını Sıfırlar.__**`)
.setImage("https://cdn.discordapp.com/attachments/568831784024801316/778881448857829426/Gezend_Header.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/568831784024801316/778882255245934592/Gezend_Logo.png")
 menü.edit(TimsahTim)
  }
 if(reaction.emoji.name == "🔴") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım',
 description: '',
 usage: ''
};
