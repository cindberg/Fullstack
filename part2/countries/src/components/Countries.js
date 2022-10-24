import React from 'react'
import Countrytable from './Countrytable'
import Single from './Single'
const Countries = ({ names, single, filter, setFilter }) => {

    if (filter.length === 0) {
        return (
            <>
                <p>Search for a country </p></>
        )
    }

    if (names.length > 10) {

        return (
            <p> Too many matches, specify another filter</p>
        )
    } else if (names.length <= 10 && names.length > 1) {
        return (
            <Countrytable names={names} setFilter={setFilter} />
        )
    } else if (names.length === 1) {
        return (
            <Single country={single} />
        )
    } else {
        return (
            <>
                <p>
                    No countries found
                </p>
            </>
        )
    }


}
export default Countries