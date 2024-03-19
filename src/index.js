import app from "./app.js";
import {connectdb} from './db.js';

const PORT= process.env.PORT ?? 3000;
app.listen(PORT);
console.log("server on port 3000");

connectdb();