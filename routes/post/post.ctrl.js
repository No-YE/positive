const Thank = require('../../model/post.thank');
const Praise = require('../../model/post.praise');

const getThank = (req, res) => {

    Thank.find( {projectID: req.query.projectID} ).then((thanks) => {

        let response = new Array;

        for (let i = 0; i < thanks.length; i++) {
            const responstObject = {
                writer: thanks[i].writer,
                content: thanks[i].content,
                date: thanks[i].date.toString().substring(0, 10),
            }

            response.push(responstObject);
        }
        res.status(200).send(response).end();

    }).catch((err) => {

        if(err) {
            console.error(err);
            res.status(500).end();
            return;
        }

    });

};

const postThank = (req, res) => {

    let thank = new Thank();
    thank.projectID = req.body.projectID;
    thank.writer = req.decoded.id;
    thank.content = req.body.content;

    thank.save((err) => {
        if(err) {
            console.error(err);
            res.status(500).end();
            return;
        }

        res.status(200).end();
    });

};

const getPraise = (req, res) => {

    Praise.find( {projectID: req.query.projectID} ).then((praises) => {

        let response = new Array;

        for (let i = 0; i < praises.length; i++) {
            const responstObject = {
                writer: praises[i].writer,
                content: praises[i].content,
                date: praises[i].date.toString().substring(0, 10),
            }

            response.push(responstObject);
        }
        res.status(200).send(response).end();

    }).catch((err) => {

        if(err) {
            console.error(err);
            res.status(500).end();
            return;
        }

    });

};

const postPraise = (req, res) => {

    let praise = new Praise();
    praise.projectID = req.body.projectID;
    praise.writer = req.decoded.id;
    praise.content = req.body.content;

    praise.save((err) => {
        if(err) {
            console.error(err);
            res.status(500).end();
            return;
        }

        res.status(200).end();
    });

};

exports.getThank = getThank;
exports.postThank = postThank;
exports.getPraise = getPraise;
exports.postPraise = postPraise;