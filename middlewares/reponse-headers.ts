import { Request, Response } from 'express';

const zipHeaders = (req: Request, res: Response, next) => {
    const fileName = Date.now();
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}.zip`);
    next();
} 

export {
    zipHeaders
}