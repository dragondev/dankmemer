const DankClient = require('./lib/DankClient');
function Dank(token) {
	return new dank(token);
}

Dank.Memer = DankClient;
Dank.version = require('./package.json').version;

module.exports = DankClient;
