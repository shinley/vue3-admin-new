const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)


server.use((req, res, next) => {
  const pth = req.path
  // 在此处根据路径中是否包含 update 和 del 来修改请求方式
  console.log(pth)
  if (req.method === 'POST') { // add your authorization logic here
    req.method = 'PATCH'
  } 
  next() // continue to JSON Server router
 })

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

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  "/posts\\?id=:id": "/posts/:id"
}))

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})