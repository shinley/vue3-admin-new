const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({static:path.join(__dirname, 'middleware.js')})

server.use(middlewares)

server.use(jsonServer.bodyParser)

// Use default router
server.use(router)

router.render = (req, res) => {
  if (req.method === 'POST' || req.method === 'PATCH') {
    res.json({
      "code": 200,
      "data": "",
      "message": "successs"
    })
  }
}

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))

server.listen(3000, () => {
  console.log('JSON Server is running')
})