import React from 'react'
const ReactDOMServer = require('react-dom/server')
import { StaticRouter } from 'react-router-dom'
import App from './components'

const Html = props => {
    return (
        <html lang="es-VE"><head>
            <meta httpEquiv="Content-Type" content="text/html; charSet=UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#373636" />
            <meta name="msapplication-navbutton-color" content="#373636" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <link rel="stylesheet" href="assets/css/bundle.css" />
            <link href="assets/img/icon.png" rel="icon" sizes="192x192" />
            <link href="assets/img/icon.png" rel="icon" sizes="96x96" />
            <script src="assets/js/createjs.min.js"></script>
            <script src="assets/js/SwishSwish.js?1573538769040"></script>
            <script src="assets/js/animate.js"></script>
        </head>
            <body>
                <main id="app" className="scroll">
                    {props.children}
                </main>
                <script src="assets/js/bundle.js"></script>
            </body>
        </html>
    )
}

const context = {}

const render = (req) => {
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Html>
                <App />
            </Html>
        </StaticRouter>
    )

    return { html, context }
}



export default render