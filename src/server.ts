import App from "./app.js";
import dotenv from "dotenv";

dotenv.config()

const app = new App();
const port = process.env.PORT || 3000;

app.start(port);
