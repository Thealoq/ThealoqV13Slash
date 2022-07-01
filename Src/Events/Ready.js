const config = global.config
const Discord = require('discord.js')
class Events {
    constructor() {
        this.name = "ready"
    }
    execute() {
           client.user.setPresence({ activities: [{ name: config.footer }] });
    }
}
module.exports = Events
