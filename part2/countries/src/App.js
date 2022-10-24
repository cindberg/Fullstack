import Filter from "./components/Filter"
import Countrytable from "./components/Countrytable"
import React from 'react'
import axios from 'axios'
import Countries from "./components/Countries"
import { useState, useEffect } from 'react'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all').then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const namesToShow = countries.map(country => country.name.common.toString())
    .filter(name => name.toLowerCase()
      .includes(newFilter.toLowerCase()))

  const singleToShow = countries.filter(country => country.name.common.toString().toLowerCase()
    .includes(newFilter.toLowerCase()))[0]

  return (
    <div>
      <Filter handleFilter={handleFilter} />
      <Countries names={namesToShow} single={singleToShow} filter={newFilter} setFilter={setNewFilter} />
    </div>
  )

}

export default App