import mongoose  from 'mongoose';

import app from './app';
import config from './app/config';

async function server() {
    try {
             //    ---------mongodb connected-----------------
        await mongoose.connect(config.database_url as string);

       
                //  -----sever port--------------
        app.listen(config.port, () => {
            console.log(`Server is running at http://localhost:${config.port}`);
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}
server();
