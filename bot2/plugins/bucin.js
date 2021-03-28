let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Escolho ficar sozinha, não por esperar o perfeito, mas preciso que nunca desista.",
  "Uma única pessoa foi criada com um parceiro que ele não havia encontrado.",
  "Solteiros. Talvez seja a maneira de Deus dizer 'Descansa do amor errado'.",
  "Solteiros são jovens que priorizam o desenvolvimento pessoal para um amor mais elegante depois.",
  "Não procuro alguém que seja perfeito, mas procuro alguém que se torna perfeito graças à minha força.",
  "O namorado de alguém é nossa alma gêmea pendente.",
  "Os solteiros devem passar. Chega um momento em que toda solidão se torna uma união com seu amante halal. Seja paciente.",
  "Romeu está disposto a morrer por Julieta, Jack morreu porque salvou Rose. A questão é, se você ainda quer viver, seja solteiro.",
  "Procuro pessoas não com base nas suas qualidades, mas procuro pessoas com base na sua sinceridade.",
  "Matchmaking não é flip-flops, que muitas vezes são confundidos. Portanto, você deve continuar na luta que deveria estar.",
  "Se você é a corda do violão, não quero ser o guitarrista. Porque não quero terminar com você.",
  "Se amar você é uma ilusão, deixe-me imaginar para sempre.",
  "Querida ... Meu trabalho é só te amar, não contra o destino.",
  "Quando estou com você, parece que dura 1 hora e apenas 1 segundo, mas se estou longe de você, parece que 1 dia se transforma em 1 ano.",
  "A compota de banana sabe suedang, embora a distância se estenda, meu amor nunca irá desaparecer.",
  "Eu quero ser o único, não o único.",
  "Não posso prometer ser bom. Mas prometo estar sempre ao seu lado.",
  "Se eu me tornar o representante do povo, definitivamente fracassarei, como você gostaria de pensar no povo se tudo o que tenho em mente é você.",
  "Olha o meu jardim, cheio de flores. Olha os teus olhos, o meu coração desabrocha.",
  "Prometa estar comigo agora, amanhã e para sempre.",
  "A falta surge não só por causa da distância. Mas também por causa de desejos que não se realizam.",
  "Você nunca estará longe de mim, onde quer que eu vá, você está sempre lá, porque você está sempre no meu coração, que é apenas o nosso corpo, não o nosso coração.",
 
]
