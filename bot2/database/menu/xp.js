const xp = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

🎇 *�𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐎𝐄𝐒*
  🐊 Prefix: 「  ${prefix}  」
  🐊 Creator: ${ownerName}
  🐊 Version: 3.0
🎇 *𝐒𝐎𝐁𝐑𝐄*
  │
  ├─ 🐊 ${prefix}info
  ├─ 🐊 ${prefix}blocklist
  ├─ 🐊 ${prefix}chatlist
  ├─ 🐊 ${prefix}ping
  └─ 🐊 ${prefix}bugreport
🎇 *𝐗𝐏*
  │
  ├─ 🐊 ${prefix}leveling
  ├─ 🐊 ${prefix}level
  └─ 🐊 ${prefix}mining
--------------------------------
Nota: Você pode coletar XP e aumentar seu nível conversando com qualquer pessoa do grupo que ativou o recurso de nivel`
}
exports.xp = xp
