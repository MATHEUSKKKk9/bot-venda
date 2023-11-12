const Discord = require("discord.js")
const config = new JsonDatabase({ databasePath:"./config.json" });


module.exports = {
    name: "botinfo", // Coloque o nome do comando do arquivo
    aliases: ["infobot"], // Coloque sinônimos aqui

    run: async (client, message, args) => {

        let servidor = client.guilds.cache.size;
        let usuarios = client.users.cache.size;
        let canais = client.channels.cache.size;
        let ping = client.ws.ping;
        let dono_id = config.get(`owner`);
        let dono = client.users.cache.get(dono_id);
        let prefixo = ".";
        let versao = "1.6";

        let embed = new Discord.MessageEmbed()
            .setColor("#9400D3")
            .setTimestamp(new Date)
            .setDescription(`💻 | Olá, tudo bem? me chamo, **[${client.user.username}]*  e fui desenvolvido para facilitar a vida dos meus usuários.

\ **・🌈| Linguagem: ** [node.js](https://nodejs.org/en/)
\ **・🛡| Versão: ** ${versao}

\ **・🗡 | Ping:** ${ping}`);


        message.reply({ embeds: [embed] })



    }
}