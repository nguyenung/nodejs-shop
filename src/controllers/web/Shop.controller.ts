import {Request, Response, NextFunction} from 'express';

export const shop = (req: Request, res: Response, next: NextFunction): void => {
    res.render('web/shop');
}

export const productDetail = (req: Request, res: Response, next: NextFunction): void => {
    res.render('web/shop/product-detail');
}

export const cart = (req: Request, res: Response, next: NextFunction) => {
    res.render('web/shop/cart');
}

export const checkout = (req: Request, res: Response, next: NextFunction) => {
    res.render('web/shop/checkout');
}
