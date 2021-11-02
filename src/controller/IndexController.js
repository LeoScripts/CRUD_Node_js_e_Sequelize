const {Usuario} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const IndexController = {
    async index(req,res){
        let {page = 1} = req.query
        let {count:total, rows:users} = await Usuario.findAndCountAll({
            limit:5,
            
        });

        let totalPagina = Math.round(total/5.5)
        return res.render('usuarios',{users,totalPagina})

    },
    async findById(req,res){
        let {id} = req.params;

        let user = await Usuario.findOne({
            where:{

                id_usuario:id
            }
        });

        return res.render('viewUsuario',{user})

    },

    async search(req,res,index){
        let{key} = req.query;
    
        let users = await Usuario.findAll({
            where:{
                nome:{
                    [Op.like]:`%${key}%`
                }
            },
            order:[
                ['id_usuario', 'ASC']
            ]
        });

        

        return res.render('usuarios',{users})
        
    },
    create(req,res){
        return res.render('cadastroUsuario')
    },
    async store (req,res){
        const {nome, email, senha} = req.body;

        console.log(nome,email,senha)

       
        const resultado = await Usuario.create({
            nome,
            email,
            senha
        });

        // log usado apenas pra testes
        console.log(resultado)


        return res.redirect('/')
    },

    //este metodo e usado pra adiocionarmos varios usuarios ao mesmo tempo
    async bulkCreate (req,res){

        //lista apenas de testes
        //varios usuarios ao mesmo tempo
        const listaDeUsuarios = [
             {nome:'teste',email:'teste@email.com',senha:'123456'},
             {nome:'teste',email:'teste@email.com',senha:'123456'},
             {nome:'teste',email:'teste@email.com',senha:'123456'},
             {nome:'teste',email:'teste@email.com',senha:'123456'},

        ]
    
        const resultado = await Usuario.bulkCreate(listaDeUsuarios);
        console.log(resultado);

        res.send('criados');
    },

    //atualizando usuario = update--------------------------------------

    // mostrando a tela de edição
    async edit(req,res){
        const {id} = req.params
        const usuario = await Usuario.findByPk(id);
        return res.render('editarUsuario',{usuario})
    },

    async update(req,res){
        const {id} = req.params
        const {nome, email, senha} = req.body

        const resultado = await Usuario.update({
            nome,
            email,
            senha
        },
        {
            where:{
                id_usuario:id
            }
        })

        console.log(resultado)
        return res.redirect('/')
    },

    //deletando

    async destroy(req,res){
        const {id} = req.params

        const resultado = await Usuario.destroy({
            where:{
                id_usuario: id
            }

        })

        console.log(resultado)
        return res.redirect('/')
    }

}

module.exports = IndexController;