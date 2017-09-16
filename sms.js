const axios = require('axios').create({ baseURL: process.env.PHONE_ADDRESS })

module.exports = function sendSMS (phone, message) {
  return axios.get(`/v1/sms/send?phone=${phone}&message=${message}`)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error))
}