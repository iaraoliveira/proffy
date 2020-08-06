import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/classes', async(request, response) => {
    const { 
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const insertedUsersId = await db('users').insert({
        name, 
        avatar, 
        whatsapp, 
        bio
    });

    const user_id = insertedUsersId[0];
    
    // const insertedClassesId = await db('classes').insert({
    //     subject,
    //     cost,
    //     user_id
    // });
    
    // const class_id = insertedClassesId[0];

    // const classSchedule = schedule.map()

    return response.send(user_id);
});

export default routes;
