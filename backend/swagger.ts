import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger';
import { Express } from 'express';

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
