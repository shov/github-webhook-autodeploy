The simplest github webhook server to auto deploy

# Usage
Important thing is script expect to has several env values and you allowed to provide them in a way that you prefer.
I've left here `ecosystem.json.example` with which easy to start using it with [pm2](http://pm2.keymetrics.io/docs/usage/quick-start/) (bit more about [ecosystem file](http://pm2.keymetrics.io/docs/usage/application-declaration/#json-format))

## My way comfortable start:
* `npm i pm2 -g`
* `npm i`
* Rename `ecosystem.json.example` to `ecosystem.json`
* Edit it
* Run `pm2 start ecosystem.json`

**If you have no node and npm, my advise is get it with [nvm](https://github.com/creationix/nvm)**
