let handler = async m => m.reply(`
╭─〘 𝐃𝐎𝐀𝐂̧𝐀̃𝐎 〙
│ • 𝐏𝐈𝐗 [11987529572]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
