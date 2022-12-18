import React, { useState } from 'react'
import Entrada from './components/Entrada'
import Saida from './components/Saida'

function App() {
    const [text, setText] = useState()

    return (
        <>
            <Entrada cb={setText} />
            <hr />
            <Saida text="Texto estático" />
            <Saida text={text} />
        </>
    )
}

export default App