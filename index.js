// Dependencies: systeminformation, express, chalk, fs
const si = require('systeminformation');
const express = require('express');
const chalk = require('chalk');
const fs = require('fs');

// get config variables
const {ip_auth, ip_whitelist, apikey_auth, apikey, port, endpoint } = require('./config.json');

// create date
let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

// create express app
const app = express();

// create log file. if log file exists then rename it to [data]-log.log


const log_file = fs.createWriteStream(__dirname + '/logs/log.log', {flags : 'a'});
const log_stdout = process.stdout;

// Create console log colors
const error_log = (msg) => console.log(chalk.redBright('[ERROR] ') + msg);
const info_log = (msg) => console.log(chalk.blueBright('[INFO] ') + msg);
const request_log = (msg) => console.log(chalk.greenBright('[ACCESS] ') + msg);

// Create auth function

const auth = async (req, res) => {
    if (ip_auth) {
        if (ip_whitelist.includes(req.remoteAddress)) {
            return true;
        } else {
            return false;
        }
    } else if (apikey_auth){
        const apikey_req = req.headers['x-api-key'];
        if (apikey_req === apikey) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}


// Create endpoint
app.get(endpoint, async (req, res) => {
    
    let log = `[${date}] ${req.ip} ${req.method} ${req.url}`;
    request_log(log);
    if (await auth(req, res)) {
        const cpu = await si.cpu();
        const load = await si.currentLoad();
        const mem = await si.mem()
        const os = await si.osInfo();
        const net = await si.networkInterfaces();
        const disk = await si.fsSize();
        const data = {
            cpu: cpu,
            load: load,
            mem: mem,
            os: os,
            net: net,
            disk: disk
        }


        res.jsonp(data);
    } else {
        res.sendStatus(401);
    }
});

// Start server
app.listen(port, () => {
    info_log(`Server started on port ${port}`);
})