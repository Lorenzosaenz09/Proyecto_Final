import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const unknownEndpoint = (request, response) => {
    let jsonResponse = {
        "Error": "unknown endpoint",
        "IP": request.ip,
        "Method": request.method,
        "Path": request.path,
        "Query": request.query,
        "Body": request.body
    };

    response.status(404).send(jsonResponse);
};

app.use(unknownEndpoint);

export default app;