import { Request, Response } from 'express';
import knex from './database/connection';

import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

//routes.get('/points', upload.single('image'), pointsController.create);
//routes.post('/points', pointsController.create);

/*routes.get('/', (request, response) => {
    return response.json({ message: "Hello World"});
});*/

routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;
    
    await knex('points').insert({
        image:'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
    });
    
    return response.json({ success: true });
});


export default routes;