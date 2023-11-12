const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const config = new JsonDatabase({ databasePath:"./config.json" });

module.exports = {
    name: "donoadd",
    run: async(client, message, args) => {
      const user = args[0]
      if (message.author.id !== `${config.get(`owner`)}`) return message.reply(`❌ | Apenas o criador do bot pode usar isso!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      if (config.get(`owner`) === `${config.get(`owner`)}`) return message.reply(`❌ | Não tem nenhum dono setado no momento!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
      message.reply(`<a:carregando_2:1121658406734934121> | Permissão de dono removida!`)
      config.set(`owner`, `${config.get(`owner`)}`)
      if(user !== `${perms.get(`${user}_id`)}`) return
       else {
        perms.delete(`${user}_id`)
       }
    }
  }