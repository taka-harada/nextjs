const { createServer } = require('http')
const { parse } = require('url')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
//const app = next({dev: process.env.NODE_ENV !== 'production'})

const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/blog/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

//const routes = require('./routes')
//const handler = routes.getRequestHandler(app)

//const {createServer} = require('http')
//app.prepare().then(() => {
//  createServer(handler).listen(3000)
//})
