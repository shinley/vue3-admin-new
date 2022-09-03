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

  // 如果是GET请求, 并且有分页参数。 在header中做标记， 并现响应方法中slice
 if (req.method === 'GET') {

    // 如果请求参数中传了分页参数 page
    if (req.query.page) {
      res.header('x-split-page', 'page')
      res.header('x-page', req.query.page)
      res.header('x-size', req.query.size)
    }
 }

  next() // continue to JSON Server router
 })



router.render = (req, res) => {
  if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT'||req.method === 'POST'||req.method === 'DELETE') {
   // 登录一般用post, 此处单独处理
   if (req.url.indexOf('/login') != -1) {      
      res.status(200).json({
        "code": 200,
        "data":{
          "token": "8fa22e88-f6ab-4a4b-930a-a5e62c4c74e8"
        },
        "message": "successs"
      })
   } else {
      res.jsonp({
        "code": 200,
        "data": "",
        "message": "successs"
      }) 
   }

  }else {
    // 此处判断是否分页
    const splitPage = res.getHeaders()["x-split-page"]
    const currPage = parseInt(res.getHeaders()["x-page"])
    const pageSize = parseInt(res.getHeaders()["x-size"])
    // 如果分页
    if (splitPage) {
         dataArray = res.locals.data;
         let total  = dataArray.length;

        let  totalPage = total % pageSize == 0 ? total/pageSize : total/pageSize + 1 

         let firstIndex = (currPage-1) * pageSize
         let lastIndex = currPage * pageSize;
         dataSlice = dataArray.slice(firstIndex, lastIndex)
        let data = {
          "currPage": currPage,
          "totalPage": totalPage,
          "pageSize": pageSize,
          "totalSize": total,
          "list": dataSlice
        }

      res.json({
        "code": 200,
        "data":data,
        "message": "success"
      })
    } else {
      // 不分页
      res.json({
        "code": 200,
        "data": res.locals.data,
        "message": "success"
      })
    }
  }
}

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  "/posts\\?id=:id": "/posts/:id"
}))

server.use(router)

let port = 8000
server.listen(port, () => {
  console.log('JSON Server is running on ' + port)
})