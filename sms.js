const blacklist = require('./blacklist.json')
const axios = require('axios').create({ baseURL: process.env.PHONE_ADDRESS })

module.exports = function sendSMS (phone, message) {
  if (blacklist.find(blacklistedPhone => blacklistedPhone === phone)) {
    console.log('~~ BLACKLISTED PHONE ~~')
    return Promise.resolve({ message, phone })
  } else {
    return axios.get(`/v1/sms/send?phone=${phone}&message=${message}`)
      .then(response => Promise.resolve({ message, phone }))
      .catch(error => Promise.reject(error))
    return Promise.resolve({ message, phone })
  }
}