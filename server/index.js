import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());

//routes


app.listen(port, () => {
    console.log(`Server runningn on port ${port}`);
})