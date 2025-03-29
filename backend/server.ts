import app from './app';
import { setupSwagger } from './swagger';

const PORT = process.env.PORT || 5000;

// Підключаємо Swagger
setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});