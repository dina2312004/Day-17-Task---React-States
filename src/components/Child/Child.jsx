import React from 'react'

function Child({name,count}) {
    return (
        <>
        <div>
            <h1>Child</h1>
            <p>{name}</p>
            <p>{count}</p>
        </div>
        
        </>
    )
}

export default Child
