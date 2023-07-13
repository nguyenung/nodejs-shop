import { Request, Response, NextFunction } from "express";

export const about = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('web/pages/about');
}

export const contactUs = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('web/pages/contact-us');
}

export const gallery = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('web/pages/gallery');
}
