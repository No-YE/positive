const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
    const token = req.headers['x-access-token'];
    
    if(!token) {

        return res.status(403).json({
            message: "Should log in!"
        });

    } else {

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            
            if(err) {
                return res.status(404).json({
                    message: err
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
        
    }
}

module.exports = isLoggedIn;