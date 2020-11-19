const Discord = require ("discord.js");
const db = require("quick.db");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setThumbnail(`https://cdn.discordapp.com/attachments/568831784024801316/778882255245934592/Gezend_Logo.png`)
.addField("__**Bot Verileri**__", `<a:hyqued2:770590873917587457>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hyqued2:770590873917587457>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hyqued2:770590873917587457>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:premiumpartner:771056935449395250> **Bot Sahibi**  <@550303519530418186> \n **Leowsu⌭K#9999** \n\n <a:premiumpartner:771056935449395250> **Bot Sahibi**  <@336450004585545729> \n **Zéuss⌭cuK#9999** \n`)
.addField("__**Sürümler**__", `<a:kumuz:770589510031376384> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:kumuz:770589510031376384> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:derece:770588677063573524>  **${client.ws.ping}** ms`,true)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/778881448857829426/Gezend_Header.png`)
.setColor("BLUE")

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["bot-istatistik","istatistik"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'istatistikler', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'g!yardım'
};
