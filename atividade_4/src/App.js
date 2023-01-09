import React, { useState } from 'react'

export default function App() {
    const [answer, setAnswer] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [letters, words] = [answer.length, answer.split(' ').filter(v => v).length]
    const getWordsClassification = count => count < 3 ? 'poor' : (count < 15 ? 'good' : 'excellent')
    const getLettersClassification = count => count < 15 ? 'poor' : (count < 75 ? 'good' : 'excellent')
    const submitHandler = e => {
        e.preventDefault()
        setAnswer('')
        alert("Obrigado por compartilhar")
    }

    return (
        <>
            <header className='nav'>
                <div className="container">
                    <h1>Feliz ano novo, 2023!</h1>
                    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                        {isLoggedIn ? 'Sair' : 'Entrar'}
                    </button>
                </div>
            </header>
            <div className='container'>
                <main>
                    {!isLoggedIn &&
                        <p className="warning">
                            <span>Para responder é necesário se identificar.</span>
                            <button onClick={() => setIsLoggedIn(true)}>Entrar</button>
                        </p>
                    }
                    <form onSubmit={submitHandler} action="">
                        <div className='form-field'>
                            <label htmlFor="answer">Compartilhe seus objetivos para este ano</label>
                            <textarea
                                name="answer"
                                id="answer"
                                cols="30"
                                rows="10"
                                onChange={e => setAnswer(e.target.value)}
                                value={answer} />
                            <p className='input-helper'>
                                <span data-classification={getLettersClassification(letters)}>{letters}</span>/
                                <span data-classification={getWordsClassification(words)}>{words}</span> (letras/palavras)
                            </p>
                        </div>
                        <input type="submit" value="Enviar" disabled={!isLoggedIn} />
                    </form>
                </main>
            </div>
        </>
    )
}