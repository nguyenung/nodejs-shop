import {Request, Response, NextFunction} from 'express';
export const homePage = (req: Request, res: Response, next: NextFunction): void => {
    res.render('web/home.pug');
}
