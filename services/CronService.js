const { CronJob } = require("cron");

class CronService {
    constructor(time, task) {
        this.task = task
        this.time = time
    }

    job() {
        new CronJob(this.time, () => {
            this.task
        })
    }
}

module.exports = CronService