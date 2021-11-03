const express = require('express');
const path = require('path');
const IndexController = require('./controller/IndexController');

const router = express.Router();

router.get('/', IndexController.index);

router.get('/ver/:id', IndexController.findById);
//cafdastro
router.get('/cadastro', IndexController.create);
router.post('/cadastro', IndexController.store);
// editando usuario
router.get('/editar/:id', IndexController.edit);
router.put('/editar/:id', IndexController.update);
//deletando
router.delete('/deletar/:id',IndexController.destroy)



module.exports = router;