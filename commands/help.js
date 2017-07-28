class HelpCommand {

  execute(msg, contents) {
    let output = "\n\n"
      + "**a!slot [amount]** - Bet in the slot machine with optional amount (max 500)"
    msg.channel.send(output)
  }

}

module.exports = HelpCommand
