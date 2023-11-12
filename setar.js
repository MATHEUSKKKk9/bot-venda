const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const config = new JsonDatabase({ databasePath:"./config.json" });
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = new JsonDatabase({ databasePath:"./databases/myJsonProdutos.json" });

module.exports = {
    name: "setar", 
    run: async(client, message, args) => {
      if(message.author.id !== `${perms.get(`${message.author.id}_id`)}`) return message.reply(`❌ | Você não está na lista de pessoas!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      if (!args[0]) return message.reply(`❌ | Você não selecionou nenhum ID de produto!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      if(args[1]) return message.reply(`❌ | Você não selecionar dois IDs de vez!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      if(args[0] !== `${db.get(`${args[0]}.idproduto`)}`) return message.reply(`❌ | Esse ID de produto não é existente!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));

      const row = new Discord.MessageActionRow()               
        .addComponents(
          new Discord.MessageButton()
            .setCustomId(args[0])
            .setLabel('Comprar')
            .setEmoji("🛒")
            .setStyle('SUCCESS'),
      );
        
      const embed = new Discord.MessageEmbed()
        .setTitle(`${config.get(`title`)} | Bot Store`)
        .setDescription(`
\`\`\`
${db.get(`${args[0]}.desc`)}
\`\`\`
**<a:planeta:1121658488741961759> | Nome:** __${db.get(`${args[0]}.nome`)}__
**<:MoneyLost7:1121658471666958406> | Preço:** __${db.get(`${args[0]}.preco`)}__
**<:Caixa:1121658402448343070> | Estoque:** __${db.get(`${args[0]}.conta`).length}__`)
        .setColor(config.get(`color`))
        .setThumbnail(client.user.displayAvatarURL())
      message.channel.send({embeds: [embed], components: [row]})
    }
}