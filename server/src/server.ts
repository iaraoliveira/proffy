import express from 'express';

import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors)

//express não entende json por padrão, tem de explicar pra ele
app.use(express.json())

app.use(routes);

app.listen(3333);
