import express, {Express} from 'express';
import adminRoutes from "./routes/admin";

class App {
    private app: Express;
    constructor() {
        this.app = express();
        this.configureMiddlewares();
        this.configureRoutes();
    }

    private configureMiddlewares = (): void => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configureRoutes = (): void => {
        this.app.use(adminRoutes)
    }

    public start = (port: number): void => {
        this.app.listen(port, () => {
            console.log(`Server is now listening on ${port}`)
        });
    }
}

export default App;
