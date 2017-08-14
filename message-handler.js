const commands = require('./commands.js')

class MessageHandler {

  processMessage(msg) {
    try {
      var m = msg.content.split(' ')
      var cmd = commands[m[0].toLowerCase()]
      if (cmd) {
        cmd.execute(msg, m)
      }
    } catch (ex) {
      console.log(ex)
    }
  }
}

module.exports = MessageHandler
