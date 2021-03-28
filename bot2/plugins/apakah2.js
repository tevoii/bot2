let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
  Pergunta: ${command} ${text}
Responda: ${pickRandom(['Sim', 'Talvez sim', 'Talvez', 'Talvez não', 'Não', 'Nem pensar'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['apakah <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

