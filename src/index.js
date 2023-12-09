import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import store from './store'
import { v4 as uuidV4 } from 'uuid'

import { cromaDarkTheme, lightTheme } from './theme'

if (!window.localStorage.getItem('anonymousId')) {
  window.localStorage.setItem('anonymousId', uuidV4())
}
let isDarkTheme

if (!window.localStorage.getItem('isDarkTheme')) {
  window.localStorage.setItem('isDarkTheme', true)
  isDarkTheme = 'true'
} else {
  isDarkTheme = window.localStorage.getItem('isDarkTheme')
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <ThemeProvider
      theme={isDarkTheme.toLowerCase() === 'true' ? cromaDarkTheme : lightTheme}
    >
      <App />
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
