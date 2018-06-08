let express = require("express");
let bodyParser = require('body-parser');
let {exec} = require('child_process');

let app = express();

app.use(bodyParser.json());

app.post('/' + (process.env.HOOK_KEY || 'test'), (req, res) => {
    console.log(`Incoming call ☎️  [${(new Date).toISOString()}]`);

    const expectedRef = process.env.HOOK_REF || false;

    if (false === expectedRef) {
        console.warn('Skip. Set expected ref value as HOOK_REF in env, for example "refs/heads/master"');
        res.send('1');
        return;
    }

    const gotRef = req.body.ref || false;

    if (false === gotRef) {
        console.warn('Skip. No ref in github web-hook body');
        console.log('The body:');
        console.log(req.body);
        res.send('1');
        return;
    }

    const shellAction = process.env.HOOK_ACTION || false;

    if (false === shellAction) {
        console.warn('Skip. Set hook action as HOOK_ACTION in env, for example "git pull origin master"');
        res.send('1');
        return;
    }

    const cwd = process.env.HOOK_CWD || null;

    if (expectedRef === req.body.ref) {
        let gotError = false;
        exec(shellAction, {cwd}, (error, stdout, stderr) => {
            if (error) {
                console.error(`Shell exec error: ${error}`);
                gotError = true;
            }
            console.log(`${stdout}`);
            console.log(`${stderr}`);
        });

        if (gotError) {
            res.send('1');
            return;
        }
    } else {
        console.log(`Got unexpected ref: got[${gotRef}] != expect[${expectedRef}] 🙈`);
    }

    res.send('0');
});

app.all('*', (req, res) => {
    res.send('Access denied');
});

app.listen(process.env.PORT || 6660);