import {Request, Response} from 'express'
import db from '../database/connection';

export default class UsersController {

    async index(request: Request, response: Response) {
        const filters = request.query;

        const area = filters.area as string;
        
        if (!area){
            return response.status(400).json({
                error: 'Missing filter to search professionals'
            })
        }

        const areas = await db('areas')

        .where('areas.area', '=', area)
        .join('users', 'areas.user_id', '=', 'users.id')
        .select(['areas.*', 'users.*'])

        return response.json(areas);

    }

    async create(request: Request, response: Response){
        const {
            name,
            avatar,
            cidade,
            uf,
            skills,
            profissao,
            cost,
            whatsapp,
            email,
            contratacao,
            area
        } = request.body;

        const trx = await db.transaction()

        try{
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                cidade,
                uf,
                skills,
                profissao,
                cost,
                whatsapp,
                email,
                contratacao
            });

            const user_id = insertedUsersIds[0];

            const insertedAreasIds = await trx('areas').insert({
                area,
                user_id,
            });

            await trx.commit();

            return response.status(201).send();

        } catch (err) {
            //Serve para desfazer qualquer alteração no banco no memento do try
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new professionals'
            })
        } 
    }
}

