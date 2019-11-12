import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components'

const Main = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>)
}

ReactDOM.render(<Main />, document.getElementById('app'))

var swish = {
    elem: 'swish',
    compId: '92F5F27521415B4693B90C6F0127071C'
}
canvasAnimate(swish)

