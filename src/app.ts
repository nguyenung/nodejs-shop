import express, {Express} from 'express';
import adminRoutes from "./routes/admin";
import webRoutes from "./routes/web";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

class App {
    private app: Express;
    constructor() {
        this.app = express();
        this.setupViewEngine();
        this.setupStatic();
        this.configureMiddlewares();
        this.configureRoutes();
        this.pageNotFoundHandler();
    }

    private setupViewEngine = ():void => {
        this.app.set('view engine', 'pug');
        this.app.set('views', path.join(__dirname, 'views'));
    }

    private setupStatic = ():void => {
        this.app.use(express.static('./../public'));
    }

    private configureMiddlewares = (): void => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configureRoutes = (): void => {
        this.app.use(adminRoutes)
        this.app.use(webRoutes)
    }

    private pageNotFoundHandler = () => {
        
    }

    private connectDB = async (): Promise<void> => {
        try {
            await mongoose.connect(process.env.DB_MONGODB_CREDENTIAL as string);
            console.log('Connected to MongoDB through mongoose');
        } catch (error: any) {
            throw new Error((error as Error).message);
        }
    }

    public start = (port: number | string): void => {
        const portNumber = typeof port === 'number' ? port : parseInt(port, 10);
        this.app.listen(portNumber, async () => {
            await this.connectDB();
            console.log(`Server is now listening on ${port}`)
        });
    }
}

export default App;
