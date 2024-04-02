import app from "./src/app.js";
import {connectdb} from './src/db.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT= process.env.PORT ?? 3000;
app.listen(PORT);
console.log(`server on port ${PORT}`);

connectdb();