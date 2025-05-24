import express from 'express';
import dotenv from 'dotenv';
import { Connect } from './connect.js';

dotenv.config();

const app = express();
Connect().then(() => app.listen(3000, () => {
    console.log("server started")
}))


app.get('/', (req, res) => {
    res.send("hii")
})