The simplest github webhook server to auto deploy 

*(Actually it's abused of express but just to KIS)*

## Installation
If you doesn't have node and npm, my piece of advice is get it with [nvm](https://github.com/creationix/nvm).
Because npm is a bit disabled with 'create project' functionality here is turn to use good old github clone.
* `git clone https://github.com/shov/github-webhook-autodeploy.git`
* `cd ./github-webhook-autodeploy`
* `npm i`

## Usage
Important thing is script expect to has several env values and you allowed to provide them in a way that you prefer.
I've left here `ecosystem.json.example` with which easy to start using it with [pm2](http://pm2.keymetrics.io/docs/usage/quick-start/) (bit more about [ecosystem file](http://pm2.keymetrics.io/docs/usage/application-declaration/#json-format))

## My way comfortable start:
* `npm i pm2 -g` if you have not installed yet surely
* `npm i`
* Rename `ecosystem.json.example` to `ecosystem.json`
* Edit it
* Run `pm2 start ecosystem.json`

## Or here you go my minimalist hero:
`HOOK_KEY="secreturlpart" HOOK_REF="refs/heads/master" HOOK_CWD="../" HOOK_ACTION="git pull origin master" PORT=6660 node ./app.js`

## Hint about github.com
* Secret doesn't matter.
* Pay attention are you really can use ssl, it's often error is that webhook works on *http*, but you trying to set in github https
<img src="https://preview.ibb.co/gs3CkJ/webhook.jpg"/>
