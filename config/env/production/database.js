module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: 'monorail.proxy.rlwy.net',
            port:  5432,
            database: 'railway',
            user: env('POSTGRES_USER'),
            password: env('POSTGRES_PASSWORD'),
        },
        useNullAsDefault: true,
        pool: { min: 0 }
    }
});

// module.exports = ({ env }) => ({
//     connection: {
//         connection: {
//             connectionString: env('DATABASE_URL')
//         }
//     }
// });
