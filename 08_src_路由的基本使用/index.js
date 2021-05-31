import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter,HashRouter} from "react-router-dom";
ReactDom.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
// ReactDom.render(<HashRouter><App/></HashRouter>,document.getElementById('root'))