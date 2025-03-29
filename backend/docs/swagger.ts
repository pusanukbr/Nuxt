export default {
    openapi: '3.0.0',
    info: {
        title: 'Social API',
        version: '1.0.0',
        description: 'API документація для соціального проєкту',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Локальний сервер',
        },
    ],
    paths: {
        '/api/v1/auth/login': {
            post: {
                summary: 'Авторизація користувача',
                description: 'Логін за допомогою email та пароля',
                tags: ['Authentication'],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    email: { type: 'string', example: 'user@example.com' },
                                    password: { type: 'string', example: 'password123' },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Успішна авторизація',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        token: { type: 'string' },
                                    },
                                },
                            },
                        },
                    },
                    401: { description: 'Невірні дані для входу' },
                },
            },
        },
    },
};
