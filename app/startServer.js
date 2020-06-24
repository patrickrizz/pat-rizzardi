const Settings = require("./settings");
const { app } = require("../index");

const startServer = () => {
    app.listen(Settings.port, () => {
        console.log(`App is listening on port ${Settings.port}`);
    });
};

exports.startServer = startServer;
