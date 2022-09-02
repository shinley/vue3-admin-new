const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

// Use default router
server.use(router)

router.render = (req, res) => {
  if (req.method === 'POST') {
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