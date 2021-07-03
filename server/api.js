const config = require('../config.json')
const axios = require('axios')

const APIRoot = config.API_ROOT.URL

async function getSomething() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${APIRoot}/someRoute`,
      params: {
        api_key: API_KEY
      }
    })
    if (response.status == 200) {
      const data = response.data.results
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getSomething
}
