
import React from 'react'


const Countrytable = ({ names, setFilter }) => {
    return (
        <>

            {names.map(country =>
                <p key={country}>
                    {country}


                    <button onClick={() => setFilter(country)}>show</button>
                </p>
            )}
        </>
    )
}
export default Countrytable