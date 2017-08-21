const Discord = require("discord.js")
const client = new Discord.Client()
const MessageHandler = require("./message-handler.js")
const handler = new MessageHandler()
const config = require('./config.js')

client.on('ready', () => {
  console.log("Bot ready!")
})

client.on('disconnect', function(erMsg, code) {
    console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
    client.connect();
})

client.on('message', msg => {
  if (msg.author.id != client.user.id) {
    handler.processMessage(msg)
  }
})

client.login(config.token).then(str => {
  client.user.setGame("Free Play! Use a!slot [amount]")
})
