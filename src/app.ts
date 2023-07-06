import express, { Express } from 'express';
import {adminRoutes, webRoutes} from "./routes/index.js";
import { connectMongoDB } from './database/index.js'
import dotenv from "dotenv";
import path from "path";
import { engine } from 'express-handlebars';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config();

class App {
    private app: Express;
    constructor() {
        this.app = express();
        this.setupViewEngine();
        this.setupStatic();
        this.configureMiddleware();
        this.configureRoutes();
        this.pageNotFoundHandler();
    }

    private setupViewEngine = (): void => {
        this.app.engine('.hbs', engine({
            extname: '.hbs',
        }));
        this.app.set('view engine', '.hbs');
        this.app.set('views', path.join(__dirname, 'views'));
    }

    private setupStatic = (): void => {
        this.app.use(express.static(path.join(__dirname, '../public')));
    }

    private configureMiddleware = (): void => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configureRoutes = (): void => {
        this.app.use('/admin', adminRoutes)
        this.app.use(webRoutes)
    }

    private pageNotFoundHandler = () => {

    }

    public start = (port: number | string): void => {
        const portNumber = typeof port === 'number' ? port : parseInt(port, 10);
        this.app.listen(portNumber, async () => {
            await connectMongoDB();
            console.log(`Server is now listening on ${port}`)
        });
    }
}

export default App;
