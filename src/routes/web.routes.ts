import { Router } from "express";
import { homePage } from "../controllers/web/Home.controller";
import { shop, productDetail, cart, checkout } from "../controllers/web/Shop.controller";
import { myAccount, wishList } from "../controllers/web/User.controller";
import { about, contactUs, gallery } from "../controllers/web/Page.controller";

const router = Router();

router.get('/', homePage);

router.get('/shop', shop);

router.get('/cart', cart);

router.get('/checkout', checkout);

router.get('/product/:id', productDetail);

router.get('/my-account', myAccount);

router.get('/wish-list', wishList);

router.get('/about-us', about);

router.get('/contact-us', contactUs);

router.get('/gallery', gallery);

export default router;
