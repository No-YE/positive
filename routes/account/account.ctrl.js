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
                    res.status(200);
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
}

const logIn = (req, res) => {

    User.findOne({ id: req.body.id }).then((user) => {

        if(user == null) {
            res.status(404).json({
                "message": "it is not existing id or incorrect password"
            }).end();
        } else if(user.pw != req.body.pw) {
            res.status(404).json({
                "message": "it is not existing id or incorrect password"
            }).end();
        } else {
            res.status(200).end();
        }

    }).catch((err) => {
        
        if(err) {
            console.error(err);
            res.status(500).end();
            return;
        }

    });
}

exports.signUp = signUp;
exports.logIn = logIn;