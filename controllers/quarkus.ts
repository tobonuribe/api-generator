import express from 'express';
import { zipFolder } from '../commons/zip';
import { zipHeaders } from '../middlewares/reponse-headers';
import { base64ToSwagger, swaggerToJSON } from '../middlewares/swagger';
import { Request, Response } from 'express';

const app = express();

// agregar middleware para validar los datos requeridas del swagger ingresado
app.post('/quarkus/generate', base64ToSwagger, swaggerToJSON, zipHeaders, (req: Request, res: Response) => {
    //proceso para compiar los archivos de las plantillas y reemplazar las variables
    //usar npm scaffold-generator
    console.log(req.body.data.swagger);
    res.send(zipFolder('./outputs/transactions01'));
});

export = app;