const typeorm = require("typeorm");
const EntitySchema = typeorm.EntitySchema;
const dotenv = require("dotenv");
dotenv.config();

module.exports = async function () {
    typeorm.createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        synchronize: true,
        entities: [
            new EntitySchema(require("../entity/Post")),
            new EntitySchema(require("../entity/Category")),
        ],
    });
};
