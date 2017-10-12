require('dotenv').config()
const PromiseThrottle = require('promise-throttle')
const sendSMS = require('./sms')
const results = require('./results.json')

const promiseThrottle = new PromiseThrottle({
  requestsPerSecond: 0.1, // up to 1 request per second
  promiseImplementation: Promise
})

results.forEach((participant, index) => {
  // console.log('Rank:', index + 1, 'Score:', participant.score, 'Phone:', participant.phone)
  const rank = index + 1
  let message = `Vanavond om 19u00 de grote finale van De Slimste Mens van Beselare met finalisten Lien, Heike, Pieter, Lies, Jurgen, Dries en Serge!`

  if (rank <= 20) {
    message += ` PS: Je staat op plaats ${rank} in de pronostiekwedstrijd voor het winnen van de ballonvaart. Tot dan!`
  }
  
  promiseThrottle.add(() => {
    return sendSMS(participant.phone, message)
  }).then(data => {
    console.log(data)
  })
})

// --> ADD YOUR LOGIC BELOW

// EXAMPLE:
// sendSMS('0496059773', 'Hello World!')
//   .then(() => {
//     console.log('Message sent!')
//     process.exit()
//   })
//   .catch(() => {
//     console.log('Something went wrong!')
//     process.exit()
//   })