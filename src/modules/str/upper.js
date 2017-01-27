/**
 * Uppercase text
 * @param {string} text
 * @return {Promise(string)}
 */
module.exports = (text) => {
	return new Promise((resolve, reject) => {
		resolve(text.toUpperCase());
	});
};
