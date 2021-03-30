module.exports = async (...args) => {
	const { default: app } = await import('./entry.mjs');
	await app(...args);
};
