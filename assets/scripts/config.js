'use strict'

let apiUrl
const apiUrls = {
  production: 'https://afternoon-beach-76578.herokuapp.com',
  development: 'http://localhost:4742'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
