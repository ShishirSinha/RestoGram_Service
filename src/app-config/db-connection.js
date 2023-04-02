const mongoose = require('mongoose');
const config = require('../../config/config');
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(config.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Application Connected to host=${connection.connection.host} Database=${connection.connection.name}`);
    } catch(err) {
        console.error(err);
    }
}
module.exports = connectDB;