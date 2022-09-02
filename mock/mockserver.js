const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
// const middlewares = jsonServer.defaults({static:path.join(__dirname, 'middleware.js')})

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

// Use default router
server.use(router)

router.render = (req, res) => {
  if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT'||req.method === 'POST'||req.method === 'DELETE') {
    res.jsonp({
      "code": 200,
      "data": "",
      "message": "successs"
    }) 
  }else {
    res.json({
      "code": 200,
      "data": res.locals.data,
      "message": "success"
    })
  }
}


server.listen(3000, () => {
  console.log('JSON Server is running')
})