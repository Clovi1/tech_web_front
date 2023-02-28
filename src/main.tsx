import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
// @ts-ignore
import {theme} from "./theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
