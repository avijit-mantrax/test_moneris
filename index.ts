import express from "express";
import cors from "cors";
import endpoint from "./routes/routes";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(endpoint)


app.listen(7000,  () => {
    console.info(`server listening on ${7000}`);
})