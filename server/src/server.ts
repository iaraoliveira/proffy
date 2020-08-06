import express from 'express';

import routes from './routes';

const app = express();

//express não entende json por padrão, tem de explicar pra ele
app.use(express.json())

app.use(routes);

app.listen(3333);
