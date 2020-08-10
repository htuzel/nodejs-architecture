import mongoose from 'mongoose';
import {DatabaseConfig} from '../config/index.js';

export default async () => {
    mongoose.connect(DatabaseConfig.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if(error){
            throw error;
        }
        console.log('Connected!')
    });
}

