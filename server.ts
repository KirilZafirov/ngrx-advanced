import * as express from 'express';
import { join } from 'path';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { APP_BASE_HREF } from '@angular/common';

const PORT = process.env.PORTv || 8080;
const staticRoot = join(process.cwd(), 'dist/ngxr-advanced');
const { AppServerModuleNgFactory , LAZY_MODULE_MAP } = require('./dist/ngxr-advanced/server/main');
const app = express();

app.engine('html' , ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers:[
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', staticRoot);

app.get('*.*', express.static(staticRoot , {
    maxAge: '1y'
  }));
app.get('*', (req, res) => res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] } ));

app.listen( PORT , () => console.log(`Listening on http://localhost:${PORT}`));
