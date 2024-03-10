import app from "./app.js";
import {connectdb} from './db.js';

app.listen(3000);
console.log("server on port 3000");

connectdb();