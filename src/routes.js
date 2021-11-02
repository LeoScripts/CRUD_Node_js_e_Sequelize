const express = require('express');
const path = require('path');
const IndexController = require('./controller/IndexController');

const router = express.Router();


router.get('/', IndexController.index);

//acrencentado nesta aula
router.get('/ver/:id', IndexController.findById);
router.get('/search', IndexController.search);

//esta rota serve pra exibirmos a pagina de cadastro
router.get('/cadastro', IndexController.create);

//ja esta serve pra que envimos os dados recebidos
// mas o clinte nao ve pois ela e uma rota post
router.post('/cadastro', IndexController.store);


// criando varios usuarios
router.get('/cadastro-varios', IndexController.bulkCreate);
router.post('/cadastro-varios', IndexController.bulkCreate);

// editando usuario
router.get('/editar/:id', IndexController.edit);
router.put('/editar/:id', IndexController.update);

//deletando
router.delete('/deletar/:id',IndexController.destroy)



module.exports = router;