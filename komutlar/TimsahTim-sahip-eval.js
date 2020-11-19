const Discord = require('discord.js')
const util = require('util');
const db = require('quick.db')
const tokenuyari = `Hayırdır Bilader Tokenımı Alcan Nah Alırsın.`


exports.run = async (client, message, args) => {
  

  let izinli = ["550303519530418186"] 
 if(!izinli.includes(message.member.id))  return message.channel.send('')
  
  if(args[0] == '@everyone') return;
  
    if(!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Kod yaz`)
            .setColor("BLUE")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

        const code = args.join(' ');
    if(code.match(/(client.token)/g)) {
        const newEmbed = new Discord.MessageEmbed()
            .addField('Hata Çıktı;', `\`\`\`xl\n${tokenuyari}\`\`\``)
            .setColor('BLUE');
        message.channel.send(newEmbed);
        return
    }

    function clean(text) {
        if (typeof text !== 'string')
            text = require('util').inspect(text, { depth: 0 })
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
    };

    const evalEmbed = new Discord.MessageEmbed().setColor("BLUE")
    try {
        var evaled = clean(await eval(code));
        if(evaled.startsWith('NTQ3M')) evaled = tokenuyari;
        if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`\n${evaled}\n\`\`\``)
        else evalEmbed.setDescription(`\`\`\`js\n${evaled}\n\`\`\``)
        const newEmbed = new Discord.MessageEmbed()
            .setDescription(`\`\`\`js\n${evaled}\`\`\``)
            .setColor("BLUE")
        message.channel.send(newEmbed);
    }
    catch (err) {
        evalEmbed.addField('Hata Çıktı;', `\`\`\`js\n${err}\n\`\`\``);
        evalEmbed.setColor('BLUE');
        message.channel.send(evalEmbed);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    kategori: 'yapımcı'
}

exports.help = {
    name: 'eval',
    description: 'Yazılan kodu çalıştırır.',
    usage: 'eval [kod]'
}