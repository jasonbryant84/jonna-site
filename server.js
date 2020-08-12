// server.js
const { createServer } = require('http'),
    { parse } = require('url'),
    express = require('express'),
    next = require('next'),
    port = process.env.PORT || 3000,
    dev = process.env.NODE_ENV !== 'production',
    app = next({ dev }),
    handle = app.getRequestHandler(),
    environment = process.env.ENVIRONMENT || 'development'

app
  .prepare()
  .then(() => {
    server = express()

    server.use('/assets', express.static('assets'))

    // Serve All other Pages
    server.get('*', (req, res) => {
      res.environment = environment
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:' + port)
      if (process.env.NODE_ENV === 'development') {
        https.createServer(sslOptions, server).listen(5001)
        console.log('...and via https on port 5001')
      }
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

// app.prepare().then(() => {
  // createServer((req, res) => {
  //   // Be sure to pass `true` as the second argument to `url.parse`.
  //   // This tells it to parse the query portion of the URL.
  //   const parsedUrl = parse(req.url, true)
  //   const { pathname, query } = parsedUrl

  //   app.use('/assets', express.static('assets'))

  //   if (pathname === '/a') {
  //     app.render(req, res, '/a', query)
  //   } else if (pathname === '/b') {
  //     app.render(req, res, '/b', query)
  //   } else {
  //     handle(req, res, parsedUrl)
  //   }
  // }).listen(port, (err) => {
  //   if (err) throw err
  //   console.log(`> Ready on http://localhost:${port}`)
  // })
// })