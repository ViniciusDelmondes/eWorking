import express from 'express'
import ConnectionsController from './controllers/ConnectionsController'
import UsersController from './controllers/UsersController'

import {celebrate, Joi} from 'celebrate'

const routes = express.Router();

const usersControllers = new UsersController();
const connectionsController = new ConnectionsController();

routes.post(
    '/users',
    //Usando o celebrate para que todos os campos sejam preenchidos obrigatoriamente.
    celebrate({
        body: Joi.object().keys({
           name:  Joi.string().required(),
           avatar:  Joi.string().required(),
           cidade:  Joi.string().required(),
           uf:  Joi.string().required(),
           profissao:  Joi.string().required(),
           skills:  Joi.string().required(),
           cost:  Joi.string().required(),
           whatsapp:  Joi.string().required(),
           email:  Joi.string().required().email(),
           contratacao:  Joi.string().required(),
           area:  Joi.string().required(),
        })
    }, {
        abortEarly: false
    }), 
    usersControllers.create);
routes.get('/users', usersControllers.index);

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;