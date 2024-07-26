module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'monorail.proxy.rlwy.net),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'railway),
            user: env('DATABASE_USERNAME', process.env.POSTGRES_USER),
            password: env('DATABASE_PASSWORD', process.env.POSTGRES_PASSWORD),
        },
        useNullAsDefault: true,
    },
});
