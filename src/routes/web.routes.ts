import { Router } from "express";
import { homePage } from "../controllers/frontend/Home.controller.js";
import { shop, productDetail, cart, checkout } from "../controllers/frontend/Shop.controller.js";
import { myAccount, wishList } from "../controllers/frontend/User.controller.js";
import { about, contactUs, gallery } from "../controllers/frontend/Page.controller.js";

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
