const mongoose = require('mongoose');
const Project = require('../../model/project');

const registerProject = (req, res) => {

    let project = new Project();

    const date = new Date();
    const currentTime = date.getFullYear()+ '/' + date.getMonth() + '/'+ date.getDate();
    
    project.projectID = currentTime + req.decoded.id;
    project.user = req.decoded.id;
    project.resolution = req.body.resolution;
    project.term = req.body.term;

    project.save((err) => {
        if(err) {
            console.error(err);
            res.status(500).end();
            return;
        }

        res.status(200).end();
    });

};

const takeProject = (req, res) => {

    Project.find( {user: req.decoded.id} ).then((project) => {

        let response = new Array;

        for (let i = 0; i < project.length; i++) {
            const responstObject = {
                projectID: project[i].projectID,
                date: project[i].date.toString().substring(0, 10),
                resolution: project[i].resolution,
                term: project[i].term
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

exports.registerProject = registerProject;
exports.takeProject = takeProject;