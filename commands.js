const SlotCommand = require("./commands/slot.js")

var commands = {}
commands['a!slot'] = new SlotCommand()

module.exports = commands
