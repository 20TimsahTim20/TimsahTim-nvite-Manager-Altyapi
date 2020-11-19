const Discord = require ("discord.js");
const db = require("quick.db");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor(`Gezend | Bağlantılar`, `https://cdn.discordapp.com/attachments/568831784024801316/778882255245934592/Gezend_Logo.png`)
.setDescription(`**<a:premiumpartner:771056935449395250> ︲ [ Gezend'i Ekleyin ](https://discord.com/oauth2/authorize?client_id=777568962535489566&scope=bot&permissions=805839038)**\n\n**<a:premiumpartner:771056935449395250> ︲ [ Gezend Web Sitesi ](https://timsahtim.com/)**\n\n**<a:premiumpartner:771056935449395250> ︲ [ Gezend Destek Sunucusu ](https://discord.gg/3gTCYcVQmK)**`)
.setFooter(`${message.author.username} Tarafından İstendi.`) 
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/568831784024801316/778882255245934592/Gezend_Logo.png`)

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["davet-et","bot-ekle"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'davet', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'g!yardım'
};
