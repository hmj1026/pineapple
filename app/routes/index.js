import fs from 'fs';
import path from 'path';

const dynamicRouteImport = (app) => {
	const routeFolderPath = path.join(__dirname);

	fs.readdir(routeFolderPath, (err, files) => {
		try {
			files.forEach((file) => {
				const routeFile = file.replace('.js', '');
				if (routeFile !== 'index') {
					const routePath = `./${routeFile}`;
					const obj = require(routePath);
					Object.keys(obj).forEach(key => {
						if (typeof obj[key] === 'function') {
							routeFile === 'home' ? app.use('/', obj[key]) : app.use(`/${routeFile}`, obj[key]);
						}
					})
				}
			});
		} catch (err) {
			console.error(err);
		}
	});
};

export default (app) => dynamicRouteImport(app);
