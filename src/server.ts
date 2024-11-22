const mongoose = require('mongoose');
import { env } from 'process';
import app from './app';
import config from './app/config';

async function server() {
    try {
             //    ---------mongodb connected-----------------
        await mongoose.connect(config.database_url as string);

        // ------------cheack connect mongodb---------------
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });
        mongoose.connection.on('error', (err:any) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB connection disconnected');
        });
                //  -----sever port--------------
        app.listen(config.port, () => {
            console.log(`Server is running at http://localhost:${config.port}`);
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}
server();
