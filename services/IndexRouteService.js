const GhostService = require("./GhostService");
const { projects } = require("../public/projects")
const { jobs } = require("../public/jobs")
const { indexNav } = require("../public/nav")

class IndexRouteService {
    constructor() {
        this.api = new GhostService().api
        this._logo = 'images/icons/logo.png'
    }

    async params() {
        let posts = await this.api.posts.browse({
            include: 'authors,tags',
            limit: 'all',
        })

        return {
            projects: projects,
            jobs: jobs,
            nav: indexNav,
            logo: this._logo,
            posts: posts
        }
    }

}

module.exports = IndexRouteService;