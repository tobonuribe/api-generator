import { Request, Response, NextFunction } from 'express';

const zipHeaders = (req: Request, res: Response, next: NextFunction) => {
    const fileName: number = Date.now();
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}.zip`);
    next();
} 

export {
    zipHeaders
}