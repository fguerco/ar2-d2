const SlotCommand = require("./commands/slot.js")
const HelpCommand = require("./commands/help.js")

var commands = {}
commands['a!slot'] = new SlotCommand()
commands['a!help'] = new HelpCommand()

module.exports = commands
