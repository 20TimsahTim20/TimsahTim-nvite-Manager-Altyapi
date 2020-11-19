const Discord = require(`discord.js`)

exports.run = async (bot, message, args) => {
  try {
    let TimsahTim_Davet = await message.channel.createInvite({
      maxAge: args.age * 0,
    });
      const TimsahTim = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`<a:tespit:771056933536923649> ・ Davet Kodu Oluşturuldu ・ [ https://discord.gg/${TimsahTim_Davet.code} ]`)
        .setAuthor(`Gezend | Davet Sistemi`, message.author.avatarURL)
        .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
        .setTimestamp()     
    return message.channel.send(TimsahTim).catch(e => {
return
    });
  }
  catch (e) {
return
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davetoluştur'],
  permLevel: 0
};

exports.help = {
  name: 'davet-oluştur',
  description: 'davet-oluştur',
  usage: 'davet-oluştur'
};