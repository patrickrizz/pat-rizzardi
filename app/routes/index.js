const express = require('express')
const { projects } = require("../../public/projects")
const { jobs } = require("../../public/jobs")
const { indexNav } = require("../../public/nav")
const router = express.Router()

router.use(express.static('public'))

//landing page
router.get('/', (req, res) => {
    res.render('index', {
        projects: projects,
        jobs: jobs,
        nav: indexNav,
        logo: "images/icons/logo.png"
    })
})

router.get('/projects/:projectId', (req, res) => {
    let slug = req.params['projectId'];

    let project = projects.filter( p => { 
        return p.slug == slug;
    });

    // do something if project is non-existant
    if (!project.length) {
        res.status(404).send('<h1 style="text-align: center font-size: 3.5em">404 Reqeust Not Found</h1>')
        return; 
    }

    res.render('projects', {
        project: project.pop()
    })
})

module.exports = router