import { Request, Response, NextFunction } from "express";

export const myAccount = (req: Request, res: Response, next: NextFunction) => {
    res.render('web/user/my-account');
}

export const wishList = (req: Request, res: Response, next: NextFunction) => {
    res.render('web/user/wish-list');
}
