import React from 'react'
const Single = ({ country }) => {

    return (
        <>
            <h2>{country.name.common}</h2>
            capital {country.capital}<br />
            area {country.area}<br />
            <h3>languages:</h3>

            <ul>
                {Object.values(country.languages).map((languages, index) =>
                    <li key={index}>{languages}</li>
                )}
            </ul>


            <img src={country.flags.svg} width="200" alt={"Country flag"}/>
        </>



    )
}





export default Single