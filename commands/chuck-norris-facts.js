const rp = require('request-promise')

class ChuckNorrisFactsCommand {

  execute(msg, contents) {
    msg.channel.send(':thinking:').then(m => {
      rp('https://api.icndb.com/jokes/random')
        .then((body) => {
          let data = JSON.parse(body)
          m.edit(data.value.joke.replace(/&quot;/g, '\''))
        })
        .catch((err) => {
          console.log('error retrieving chucks facts: ', err)
          m.edit('No jokes for you, sorry')
        })
    })
  }
}

module.exports = ChuckNorrisFactsCommand
