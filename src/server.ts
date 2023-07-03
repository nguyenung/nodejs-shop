import App from "./app";
import dotenv from "dotenv";

dotenv.config()

const app = new App();
const port = process.env.PORT || 3000;

app.start(port);
