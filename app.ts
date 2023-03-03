import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import './config/config';
import { corsOptions } from './config/cors';
import routes from './controllers/routes';
import { ValidationError } from 'express-validation';

const app = express();

app.use(cors(corsOptions)); // application middleware
app.use(express.json());
app.use(routes); 

app.use((err: ValidationError, req: Request, res: Response) => { // application Error handler middleware 
    return res.status(err.statusCode).json(err);
})

app.listen(process.env.PORT, () => {
    return console.log(`GenerAPI is listening at PORT ${process.env.PORT} :)`);
});