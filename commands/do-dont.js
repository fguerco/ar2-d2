class DoDontCommand {

  execute(msg, contents) {
    if (contents.length <= 1) {
      return
    }
    let newContents = contents.slice()
    newContents[0] = 'do'
    if (newContents[1].toLowerCase() == 'do') {
      newContents.shift()
    }
    msg.channel.send(newContents.join(' '))
  }
}

module.exports = DoDontCommand
