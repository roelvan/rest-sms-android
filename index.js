const baseURL = 'http://192.168.0.221:8080'
const axios = require('axios').create({ baseURL })

function sendSMS (phone, message) {
  return axios.get(`/v1/sms/send?phone=${phone}&message=${message}`)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error))
}

const phones = [
  '0496059773',
  '0496059773',
  '0496059773',
  '0496059773',
  '0496059773'
]

phones.forEach(phone => {
  sendSMS(phone, Math.random())
})