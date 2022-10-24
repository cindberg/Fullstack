import ReactDOM from "react-dom"
import App from "./App"
import React from 'react'
import axios from 'axios'

axios.get('http://localhost:3002/persons').then(response => {
  const persons = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />)
})