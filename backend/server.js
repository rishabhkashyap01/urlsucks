import express from "express";
import http from "http";


const app = express();

const PORT = 3000;

app.use('/api/status' , (req, res) => { 
    res.send('app is working'); 

});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server is live on PORT : ${PORT}`);
})
