const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const config = new JsonDatabase({ databasePath:"./config.json" });

module.exports = {
    name: "ajuda",
    run: async(client, message, args) => {        
      const row = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('retornar')
            .setEmoji('<:menoscash:1121658467783020626>')
            .setDisabled(true)
            .setStyle('PRIMARY'),
        )
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('proxima')
            .setEmoji('<:maiscash:1121658464054292510>')
            .setDisabled(false)
            .setStyle('PRIMARY'),
        );
        
        const embed = await message.reply({ embeds: [new Discord.MessageEmbed()
          .setTitle(`${config.get(`title`)} | Meus Comandos`)
          .setDescription(`
${config.get(`prefix`)}<a:Diamante:1121658425965817937> ajuda - Veja meus comandos
${config.get(`prefix`)}<a:Diamante:1121658425965817937> anuncio - Envie um anuncio Embed
${config.get(`prefix`)}<a:Diamante:1121658425965817937> botinfo - Veja minhas info
${config.get(`prefix`)}<a:Diamante:1121658425965817937> info - Veja info de uma compra
${config.get(`prefix`)}<a:Diamante:1121658425965817937> perfil - Veja seu perfil
${config.get(`prefix`)}<a:Diamante:1121658425965817937> status - Veja os status de vendas
${config.get(`prefix`)}<a:Diamante:1121658425965817937> rendimentos - Veja seus rendimentos
${config.get(`prefix`)}<a:Diamante:1121658425965817937> pegar - Veja um produto entregue
${config.get(`prefix`)}<a:Diamante:1121658425965817937> pagar - Sete um id para pago
${config.get(`prefix`)}<a:Diamante:1121658425965817937> criargift - Crie um Gift
${config.get(`prefix`)}<a:Diamante:1121658425965817937> criarcupom - Crie um cupom
${config.get(`prefix`)}<a:Diamante:1121658425965817937> configcupom - Gerencie um cupom
${config.get(`prefix`)}<a:Diamante:1121658425965817937> limpar - Apague as mensagens do chat
${config.get(`prefix`)}<a:Diamante:1121658425965817937> limpardm - Apague as mensagens do bot na sua DM
`)
          .setTimestamp()
          .setFooter(`Pagina 1/2`)
          .setThumbnail(client.user.displayAvatarURL())
          .setColor(config.get(`color`))], components: [row]})
        const interação = embed.createMessageComponentCollector({ componentType: "BUTTON", })
         interação.on("collect", async (interaction) => {
          if (message.author.id != interaction.user.id) { return; }
            if (interaction.customId === 'retornar') {
              interaction.deferUpdate();
              row.components[0].setDisabled(true)
              row.components[1].setDisabled(false)
              const embednew = new Discord.MessageEmbed()
                .setTitle(`${config.get(`title`)} | Meus Comandos`)
                .setDescription(`
${config.get(`prefix`)}<a:Diamante:1121658425965817937> ajuda - Veja meus comandos
${config.get(`prefix`)}<a:Diamante:1121658425965817937> anuncio - Envie um anuncio Embed
${config.get(`prefix`)}<a:Diamante:1121658425965817937> botinfo - Veja minhas info
${config.get(`prefix`)}<a:Diamante:1121658425965817937> info - Veja info de uma compra
${config.get(`prefix`)}<a:Diamante:1121658425965817937> perfil - Veja seu perfil
${config.get(`prefix`)}<a:Diamante:1121658425965817937> status - Veja os status de vendas
${config.get(`prefix`)}<a:Diamante:1121658425965817937> rendimentos - Veja seus rendimentos
${config.get(`prefix`)}<a:Diamante:1121658425965817937> pegar - Veja um produto entregue
${config.get(`prefix`)}<a:Diamante:1121658425965817937> pagar - Altere um id para pago
${config.get(`prefix`)}<a:Diamante:1121658425965817937> criarcupom - Crie um cupom
${config.get(`prefix`)}<a:Diamante:1121658425965817937> configcupom - Gerencie um cupom
${config.get(`prefix`)}<a:Diamante:1121658425965817937> clear - Apague as mensagens do chat
${config.get(`prefix`)}<a:Diamante:1121658425965817937> criados - Veja todos os produtos/cupons/gifts criados
`)
                .setTimestamp()
                .setFooter(`Pagina 1/2`)
                .setThumbnail(client.user.displayAvatarURL())
                .setColor(config.get(`color`))
              embed.edit({ embeds: [embednew], components: [row] })
            }
             
            if (interaction.customId === 'proxima') {
              interaction.deferUpdate();
              row.components[0].setDisabled(false)
              row.components[1].setDisabled(true)
              const embednew = new Discord.MessageEmbed()
                .setTitle(`${config.get(`title`)} | Meus Comandos`)
                .setDescription(`
${config.get(`prefix`)}<a:Diamante:1121658425965817937> criar - Crie um anuncio
${config.get(`prefix`)}<a:Diamante:1121658425965817937> setar - Sete um anuncio
${config.get(`prefix`)}<a:Diamante:1121658425965817937> config - Gerencie um anuncio
${config.get(`prefix`)}<a:Diamante:1121658425965817937> estoque - Gerencie um estoque
${config.get(`prefix`)}<a:Diamante:1121658425965817937> rank - Veja o Ranking de Clientes
${config.get(`prefix`)}<a:Diamante:1121658425965817937> configbot - Configura o bot
${config.get(`prefix`)}<a:Diamante:1121658425965817937> configcanais - Configura os canais
${config.get(`prefix`)}<a:Diamante:1121658425965817937> configstatus - Configura os status
${config.get(`prefix`)}<a:Diamante:1121658425965817937> permadd - Adicione um administrador
${config.get(`prefix`)}<a:Diamante:1121658425965817937> donoadd - Adicione um dono
${config.get(`prefix`)}<a:Diamante:1121658425965817937> permdel - Remova um administrador
${config.get(`prefix`)}<a:Diamante:1121658425965817937> donodel - Remova um dono
`)
                .setTimestamp()
                .setFooter(`Pagina 2/2`)
                .setThumbnail(client.user.displayAvatarURL())
                .setColor(config.get(`color`))
              embed.edit({ embeds: [embednew], components: [row] })
              }
            })
          }
        }