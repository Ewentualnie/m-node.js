import express from 'express'
import session from "express-session";
import cors from 'cors'
import api_v1 from './routers/router_v1'
import api_v2 from './routers/router_v2'

const port = process.env.PORT ?? 3005;
const app = express();
export const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore({}),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));
app.use(express.static('static'));
app.use(express.json());
app.use(cors());
app.use('/api/v1', api_v1);
app.use('/api/v2', api_v2);

app.listen(port, () => console.log("Server started on port: " + port))
