module.exports = {
    mongodb: {
        dev: {
            host: process.env.MONGO_HOST,
            port: process.env.MONGO_PORT,
            database: process.env.MONGO_DB,
            username: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
            host_1: process.env.MONGO_HOST,
            port_1: process.env.MONGO_PORT,
            host_2: process.env.MONGO_HOST,
            port_2: process.env.MONGO_PORT,
            replicaSet: process.env.MONGO_REPLICA
        },
    },
    jwtSecret: process.env.JWT_SECRET,
    "google": {
        clientId: process.env.GOOGLE_CLIENT,
        clientSecret: process.env.GOOGLE_CLIENT,
        redirect: process.env.GOOGLE_REDIRECT
    }
};