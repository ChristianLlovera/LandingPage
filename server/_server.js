const markup = require('./_markup').default
const express = require('express')
const server = express()


server.use('/', (req, res) => {

    const { html, context } = markup(req)
    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
        res.writeHead(301, { Location: context.url })
        res.end()
    } else {
        res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
        res.writeHead(200, { "Content-Type": "text/html charSet=UTF-8" })
        res.write(html)
        res.end()
    }

})

module.exports = server