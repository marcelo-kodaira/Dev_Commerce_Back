import 'express-async-errors';
import express from 'express';
import { appRoutes } from './routes';
import handleErrorMiddleware from './middlewares/Error.middleware';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
appRoutes(app);

app.use(handleErrorMiddleware);

export default app;