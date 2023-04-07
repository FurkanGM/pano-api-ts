import express from 'express';
import dotenv from 'dotenv';
import Post from "./handlers/Post";
import {createPanoAPIServer, PanoAPITwirp} from "../protos/service.twirp";

dotenv.config();

const server = createPanoAPIServer({
    ...Post
} as PanoAPITwirp);

const app = express();

app.post(server.matchingPath(), server.httpHandler());

const port = process.env.PORT;

app.listen(port, () => {
    console.log(server.matchingPath())
    console.log(`Server is running at :${port}`);
});