class SlotCommand {

  constructor() {
    this.items = [
      {
        emoji: ':seven:',
        factor: 15
      },
      {
        emoji: ':cherries:',
        factor: 0.5
      },
      {
        emoji: ':banana:',
        factor: 0.5
      },
      {
        emoji: ':gem:',
        factor: 5
      },
      {
        emoji: ':grapes:',
        factor: 1
      },
      {
        emoji: ':melon:',
        factor: 1
      },
      {
        emoji: ':star:',
        factor: 2.5
      }
    ]
  }

  getRandom() {
    let items = this.items
    let max = items.length

    let random1 = Math.floor(Math.random() * max)
    let random2 = Math.floor(Math.random() * max)
    let random3 = Math.floor(Math.random() * max)

    return [random1, random2, random3]
  }

  printLine(n, data, annex) {
    let items = this.items
    return "\n\n" + items[data[0]].emoji + ' : ' + items[data[1]].emoji + ' : ' + items[data[2]].emoji + annex
  }

  roll() {
    let line = [this.getRandom(), this.getRandom(), this.getRandom()]

    return {
      text: "\n" + this.printLine(0, line[0], '')
        + this.printLine(1, line[1], ' **<**')
        + this.printLine(2, line[2], ''),
      data: line[1]
    }
  }

  calculateFactor(data) {
    var sorted = data //.concat().sort()
    var item = -1
    var multiples = 1
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] == sorted[i - 1]) {
        item = sorted[i]
        multiples++
      }
    }

    let multiplier = (multiples == 1 ? 0 : multiples)

    let items = this.items
    return item >= 0 ? items[item].factor * multiplier : 0
  }

  runSlot(msg, amount) {
    var intAmount = parseInt(amount, 10)
    if (isNaN(intAmount)) {
      intAmount = 1
    }
    if (intAmount > 500) {
      intAmount = 500
    }

    var response = this.roll()
    var slot = this
    var user = msg.author.tag
    msg.channel.send(response.text).then(m => {
      setTimeout(function() {
        response = slot.roll()
        m.edit(response.text).then(m => {
          setTimeout(function() {
            response = slot.roll()
            var factor = slot.calculateFactor(response.data)
            var results = response.text + "\n\n\n**" + user + "** put **" + intAmount + "** :dollar: and "

            if (factor == 0) {
              results += "lost everything"
            }
            else {
              results += "won **" + (intAmount * factor) + "** :dollar:!"
            }
            m.edit(results)
          }, 1300)
        })
      }, 1300)
    })
  }

  execute(msg, contents) {
    return this.runSlot(msg, contents[1])
  }

}

module.exports = SlotCommand
