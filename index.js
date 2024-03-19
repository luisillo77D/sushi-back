import app from "./src/app.js";
import {connectdb} from './src/db.js';

const PORT= process.env.PORT ?? 3000;
app.listen(PORT);
console.log("server on port 3000");

connectdb();