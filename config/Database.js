import {Sequelize} from "sequelize";

const db = new Sequelize('upload_db','admin','rara12345',{
    host: 'db-express.cgdfqm7rvayu.ap-southeast-1.rds.amazonaws.com',
    dialect: "mysql"
});

export default db;