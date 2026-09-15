create database projeto_backend_abdias;

USE database projeto_backend_abdias;

CREATE TABLE login(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50),
    login varchar(50),
    senha varchar(10)
);