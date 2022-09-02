module.exports = (req, res, next) => {
    console.log("uri", req.uri)
    console.log("path", req.path)
    if (req.method === 'POST') {
        req.method = 'PATCH';
    }
    // Continue to JSON Server router
    next()
};