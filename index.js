const Discord = require("discord.js")
const client = new Discord.Client()
const MessageHandler = require("./message-handler.js")
const handler = new MessageHandler()

client.on('ready', () => {
  console.log("Bot ready!")
})

client.on('message', msg => handler.processMessage(msg))

client.login('MzQwNTM1Nzk0MTUyMzc0Mjcz.DF0AvA.qArBU36WFZdBC60zI_4iDMlDmws').then(str => {
  client.user.setGame("Free Play! Use a!slot [amount]")
})
