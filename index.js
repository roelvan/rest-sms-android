require('dotenv').config()
const sendSMS = require('./sms')

// --> ADD YOUR LOGIC BELOW

// EXAMPLE:
sendSMS('0496059773', 'Hello World!')
  .then(() => {
    console.log('Message sent!')
    process.exit()
  })
  .catch(() => console.log('Something went wrong!'))