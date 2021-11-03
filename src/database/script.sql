CREATE DATABASE sequelize_dh_pg;

USE sequelize_dh_pg;

CREATE TABLE sequelize_dh_pg.usuario (
  id_usuario int(10) PRIMARY KEY auto_increment,
  nome TEXT,
  email TEXT,
  senha TEXT  
);