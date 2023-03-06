import express from 'express';
import { zipFolder } from '../commons/zip';
import { zipHeaders } from '../middlewares/reponse-headers';
import { Request, Response } from 'express';

const app = express();

app.get('/quarkus/generate', zipHeaders, (req: Request, res: Response) => {
    //proceso para compiar los archivos de las plantillas y reemplazar las variables
    //usar npm scaffold-generator
    res.status(200).send(zipFolder('./outputs/transactions01'));
});

export = app;