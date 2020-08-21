const express = require('express')
const IndexRouteService = require('../services/IndexRouteService')
const router = express.Router()

router.use(express.static('public'))

//landing page
router.get('/', async (req, res) => {
    let params = await new IndexRouteService().params()

    await res.render('index', {...params})
})

// router.get('/projects/:projectId', (req, res) => {
//     let slug = req.params['projectId'];

//     let project = projects.filter(p => {
//         return p.slug == slug;
//     });

//     // do something if project is non-existant
//     if (!project.length) {
//         res.status(404).send('<h1 style="text-align: center font-size: 3.5em">404 Reqeust Not Found</h1>')
//         return;
//     }

//     res.render('projects', {
//         project: project.pop()
//     })
// })

module.exports = router