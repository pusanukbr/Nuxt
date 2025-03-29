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
                tags: ['User'],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: { type: 'string', example: 'userName' },
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
                                        status: { type: 'string', example: 'success' },
                                        message: { type: 'string', example: 'User registered successfully' },
                                        user: {
                                            type: 'object',
                                            properties: {
                                                id: { type: 'integer' },
                                                email: { type: 'string' },
                                                username: { type: 'string' },
                                                createdAt: { type: 'string', format: 'date-time' },
                                                updatedAt: { type: 'string', format: 'date-time' },
                                            },
                                        },
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
        '/api/v1/auth/register': {
            post: {
                summary: 'Реєстрація  користувача',
                description: 'Реєстрація за допомогою email та пароля',
                tags: ['User'],
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
                        description: 'Успішна реєстрація',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        status: { type: 'string', example: 'success' },
                                        message: { type: 'string', example: 'User registered successfully' },
                                        user: {
                                            type: 'object',
                                            properties: {
                                                id: { type: 'integer' },
                                                email: { type: 'string' },
                                                username: { type: 'string' },
                                                createdAt: { type: 'string', format: 'date-time' },
                                                updatedAt: { type: 'string', format: 'date-time' },
                                            },
                                        },
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
        '/api/v1/auth/getUser': {
            get: {
                summary: 'Получаємо користувача',
                description: 'Получаємо користувача за допомогою token',
                tags: ['User'],
                requestBody: {
                    required: true,
                    content: {
                    },
                },
                responses: {
                    200: {
                        description: 'Успішна операція',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        status: { type: 'string', example: 'success' },
                                        message: { type: 'string', example: 'User registered successfully' },
                                        user: {
                                            type: 'object',
                                            properties: {
                                                id: { type: 'integer' },
                                                email: { type: 'string' },
                                                username: { type: 'string' },
                                                createdAt: { type: 'string', format: 'date-time' },
                                                updatedAt: { type: 'string', format: 'date-time' },
                                            },
                                        },
                                        token: { type: 'string' },
                                    },
                                },
                            },
                        },
                    },
                    401: { description: 'Токен не існує або мертвий' },
                },
            },
        },
        // TODO: DELETE USERS

        '/uploads/upload-avatar': {
            post: {
                summary: 'Завантажити аватар',
                description: 'Завантажити аватар для користувача',
                tags: ['User'],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    avatar: {
                                        type: 'string',
                                        format: 'binary',
                                        description: 'Аватар користувача',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Успішна операція',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        status: { type: 'string', example: 'success' },
                                        message: { type: 'string', example: 'Avatar uploaded successfully' },
                                        imageUrl: {
                                            type: 'string',
                                            format: 'uri',
                                            example: 'http://localhost:3000/uploads/avatar.png',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    400: { description: 'Please select a file' },
                },
            },
        },
    },
};
