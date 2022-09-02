module.exports = (req, res, next) => {
    res.header('X-Hello', 'World')
    if (req.method === 'POST') {
        return res.json({
            "code": 200,
            "message":"success"
          })
    }
    next()
  }