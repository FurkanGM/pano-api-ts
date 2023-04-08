import express from 'express';
import dotenv from 'dotenv';
import Post from "./handlers/Post";
import {createPanoAPIServer, PanoAPITwirp} from "./protos/service.twirp";
import {PrismaClient} from '@prisma/client'

dotenv.config();

const server = createPanoAPIServer({
    ...Post
} as PanoAPITwirp);

const app = express();
const prisma = new PrismaClient();

app.post(server.matchingPath(), server.httpHandler());

app.listen(3000, () => {
    console.log(`Server is running at :3000`);
});

export {
    prisma
}