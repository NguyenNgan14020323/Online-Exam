import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import database from './app_api/models/database';

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(database.url, (err) => {
    if (err) {
        console.log('Connect Error!');
    } else {
        console.log('Connect success!');
    }
});

app.set('views', path.join(__dirname, 'app_server', 'views')); 

app.listen(port, (err) => {
    if (err) throw Error(err);
    console.log('Server is running port ', port);
});
