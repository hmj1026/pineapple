import fs from 'fs';
import path from 'path';

const dynamicRouteImport = (app) => {
	const routeFolderPath = path.join(__dirname);

	fs.readdir(routeFolderPath, (err, files) => {
		try {
			files.forEach((file) => {
				const routeFile = file.replace('.js', '');
				const routePath = `./${routeFile}`;
				if (routeFile !== 'index') {
                    //載入檔案
					const obj = require(routePath);
					for (let key in obj) {
						if (typeof obj[key] === 'function') {
							if (routeFile === 'home') {
								app.use('/', obj[key]);
							} else {
								app.use(`/${routeFile}`, obj[key]);
							}
						}
					}
				}
			});
		} catch (err) {
			console.log(err);
		}
	});
};

export default (app) => dynamicRouteImport(app);
