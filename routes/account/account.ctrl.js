const jwt = require('jsonwebtoken');
const User = require('../../model/user');

const signUp = (req, res) => {
    let newUser = new User();

    newUser.name = req.body.name;
    newUser.id = req.body.id;
    newUser.pw = req.body.pw;

    User.findOne({ id: req.body.id }).then((user) => {

        if (user == null) {
            newUser.save((err) => {
                if (err) {
                    console.error(err);
                    res.status(500).end();
                    return;
                } else {
                    res.status(200).end();
                }
            });
        } else {
            res.status(403).json({
                "message": "it is an existing id"
            }).end();
        }

    }).catch((err) => {

        if (err) {
            console.error(err);
            res.status(500).end();
            return;
        }

    });
};

const logIn = (req, res) => {

    User.findOne({ id: req.body.id }).select({ pw: true }).then((user) => {

        if (user == null) {

            res.status(404).json({
                "message": "it is not existing id or incorrect password"
            }).end();

        } else if (user.pw != req.body.pw) {

            console.log("user.pw: ", user);
            console.log("req.body.pw: ", req.body.pw);

            res.status(404).json({
                "message": "it is not existing id or incorrect password"
            }).end();

        } else {

            const payload = { id: user.id };
            const JWT_SECRET = process.env.JWT_SECRET;
            const option = { expiresIn: 60 * 60 * 24 };

            jwt.sign(payload, JWT_SECRET, option, (err, token) => {
                if (err) {
                    console.log(err);
                    return;
                }

                res.status(200).json({token: token}).end();
                return;
            });

        }

    }).catch((err) => {

        if (err) {
            console.error(err);
            res.status(500).end();
            return;
        }

    });
};

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

exports.signUp = signUp;
exports.logIn = logIn;