import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
// @ts-ignore
import {theme} from "./theme";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
// @ts-ignore
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </>,
)
