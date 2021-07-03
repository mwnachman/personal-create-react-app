import React from 'react'

const config = require('../../config.json')

const APIRoot = config.SERVER_BASE_URL[process.env.NODE_ENV || "development"];

const App = () => (
  <div>Personal Create React App</div>
)

export default App
