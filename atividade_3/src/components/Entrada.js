import React from 'react'

function Entrada(props) {
    return (<input type="text" onChange={(e) => props.cb(e.target.value)} />)
}

export default Entrada