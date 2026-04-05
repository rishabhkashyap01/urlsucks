import express from "express";
import http from "http";
import helmet from "helmet";
import cors from "cors";


const app = express();

const PORT = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json({limit: '20kb'}));

app.use('/api/status' , (req, res) => { 
    res.json({message: 'app is working'}); 

});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server is live on PORT : ${PORT}`);
})
