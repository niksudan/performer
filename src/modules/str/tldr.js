/**
 * Summarize text
 * @param {string} text
 * @return {Promise(string)}
 */
const summary = require('node-summary');
module.exports = (text) => {
	return new Promise((resolve, reject) => {
		summary.summarize('', text, (err, response) => {
			if (err) {
				reject(err);
			} else {
				resolve(response.trim());
			}
		});
	});
};
