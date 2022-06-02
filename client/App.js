import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import MainRouter from './MainRouter'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'


var App = () =>{
    return ( 
       <BrowserRouter>
       <ThemeProvider theme={theme}>
        <MainRouter />
        </ThemeProvider>
        </BrowserRouter>
    )
}

export default hot(module)(App)