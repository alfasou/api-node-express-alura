import mongoose from 'mongoose';

mongoose.connect(process.env.DB_CONNECT);

let db = mongoose.connection;

export default db;
