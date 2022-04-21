import {fileURLToPath} from "url";
import path from "path";
import express from "express";
import mysql from 'mysql';

const app = express()
const PORT = 9000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + 'public')))

// const pool = mysql.createPool({
    
// })

app.listen( PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
})