let handler = async (m, { conn, command, args }) => {
  let chats = args.length > 0 && /group|gc/i.test(args[0]) ? conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid) : [m.chat]
  let isDelete = /^(clear|delete)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'delete').catch(console.log)
    await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ' 𝐎 𝐠𝐫𝐮𝐩𝐨 𝐝𝐞 𝐛𝐚𝐭𝐞-𝐩𝐚𝐩𝐨 𝐟𝐨𝐢 𝐚𝐛𝐞𝐫𝐭𝐨' + (isDelete ? 'ʟɪᴍᴘᴀʀ' : '𝐦𝐮𝐝𝐨 𝐩𝐚𝐫𝐚 𝐬𝐞𝐦𝐩𝐫𝐞'), m)
}
handler.help = ['deletechat', 'deletechat group', 'mutechat', 'mutechat group']
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

