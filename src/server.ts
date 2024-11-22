const mongoose = require('mongoose');
import { env } from 'process';
import app from './app';
import config from './app/config';


async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Server is running at http://localhost:${config.port}`);
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}

// Call the main function
main();