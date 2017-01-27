/**
 * Read file contents
 * @param {string} filepath
 * @return {Promise(string)}
 */
const fs = require('fs');
module.exports = (filepath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, 'utf8', (err, response) => {
			if (err) {
				reject(err);
			} else {
				resolve(response);
			}
		});
	});
}
