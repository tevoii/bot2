const limit = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

🎇 *𝐌𝐄𝐍𝐔*
  🐊 Prefix: 「  ${prefix}  」
  🐊 Creator: 𝓐𝓓𝓜 𝓥𝓘𝓒𝓣𝓞𝓡
  🐊 Version: 3.0
🎇 *𝐒𝐎𝐁𝐑𝐄*
  │
  ├─ 🐊 ${prefix}info
  ├─ 🐊 ${prefix}blocklist
  ├─ 🐊 ${prefix}chatlist
  ├─ 🐊 ${prefix}ping
  └─ 🐊 ${prefix}bugreport
🎇 *𝐋𝐈𝐌𝐈𝐓𝐄*
  │
  ├─ 🐊 ${prefix}limit
  ├─ 🐊 ${prefix}bal
  └─ 🐊 ${prefix}buylimit
--------------------------------
Nota: Você pode comprar um limite coletando dinheiro primeiro. Verifique seu dinheiro digitando o comando *${prefix}bal* , 1 preço limite = 1000 CASH.`
}
exports.limit = limit
