const SlotCommand = require("./commands/slot.js")
const HelpCommand = require("./commands/help.js")
const SameCommand = require("./commands/same.js")
const DoDontCommand = require('./commands/do-dont.js')
const ChuckNorrisFactsCommand = require('./commands/chuck-norris-facts.js')

var commands = {}
commands['a!slot'] = new SlotCommand()
commands['a!help'] = new HelpCommand()
commands['^'] = new SameCommand()
commands['same'] = commands['^']
commands['dont'] = new DoDontCommand()
commands["don't"] = commands['dont']
commands['a!chuck'] = new ChuckNorrisFactsCommand()

module.exports = commands
