import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRedux from './redux/AppRedux'
import store from './redux/store'
import { Provider } from 'react-redux'

import AppCtx from './contextApi/AppCtx'
import AppContextProvider from './contextApi/AppContextProvider'

import App from './states/App'

import './styles/main.postcss'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div className='root'>
        <div>
            <Provider store={store}>
                <AppRedux />
            </Provider>
        </div>
        <div>
            <AppContextProvider>
                <AppCtx />
            </AppContextProvider>
        </div>
        <div>
            <App />
        </div>
    </div>
)

