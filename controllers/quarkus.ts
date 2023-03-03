import express from 'express';
import { Request, Response } from 'express';

const app = express();
app.get('/quarkus/generate', (req: Request, res: Response) => {
    res.status(200).json({ ok: false, message: "Nos existe" });
});

export = app;