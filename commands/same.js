class SameCommand {

  execute(msg, contents) {
    if (contents.length != 1) {
      return
    }
    msg.channel.send(contents[0])
  }
}

module.exports = SameCommand
