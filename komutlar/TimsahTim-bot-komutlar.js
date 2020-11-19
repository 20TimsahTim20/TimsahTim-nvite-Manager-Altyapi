const Discord = require ("discord.js");
const db = require("quick.db");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setTitle(`Gezend | Komut Sayısı`)
.setDescription('**\n Gezend | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
.setColor("BLUE")
.setThumbnail('https://cdn.discordapp.com/attachments/568831784024801316/778882255245934592/Gezend_Logo.png')
.setImage('')
.setTimestamp()
.setFooter("Gezend" , client.user.avatarURL())

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["komutlar","komut-sayısı"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'komutlar', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'g!yardım'
};
