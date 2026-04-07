import 'dotenv/config'
import express from "express";
import http from "http";
import helmet from "helmet";
import cors from "cors";
import { connectdb } from "./db/db.js";
import urlRouter from './routes/urlRoutes.js';
import { handleRedirect } from './controllers/urlController.js';

const app = express();

const PORT = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json({limit: '20kb'}));

app.use('/api/status' , (req, res) => { 
    res.json({message: 'app is working'}); 

});
app.use('/api', urlRouter);
app.get('/:short_code', handleRedirect);

const server = http.createServer(app);

await connectdb();

server.listen(PORT, () => {
    console.log(`server is live on PORT : ${PORT}`);
})
