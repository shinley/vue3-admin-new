module.exports = (req, res, next) => {
    if (req.method === 'POST') {
        return res.json({
            "code": 200,
            "message":"success"
          })
    }
    res.header('X-Hello', 'World')
    next()
  }