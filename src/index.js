/**
 * @param {string} input
 * @param {string} params
 */
module.exports = (input, params) => {
	const modules = input.split(',');
	return new Promise((resolve) => {
		new Promise((resolve) => {
			let buffer = null;
			let counter = 0;
			let processing = false;
			const interval = setInterval(() => {
				modules.forEach((module, index) => {
					if (index === counter && !processing) {
						const param = (index === 0) ? params : buffer;
						processing = true;
						require(`./modules/${module.trim()}`)(param).then((response) => {
							buffer = response;
							processing = false;
							counter += 1;
						});
					}
				});
				if (counter === modules.length) {
					clearInterval(interval);
					resolve(buffer);
				}
			}, 100);
		}).then((response) => {
			resolve(response);
		});
	});
};