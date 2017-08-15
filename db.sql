create database if not exists db;
use db;
drop table if exists noticias
create table noticias(
	id integer auto_increment primary key,
	titulo varchar(255),
	descricao varchar(255),
	data_criacao timestamp default current_timestamp
);
insert into noticias (titulo, descricao) values ('Titulo 1', 'Texto de descricao 1');
insert into noticias (titulo, descricao) values ('Titulo 2', 'Texto de descricao 2');
insert into noticias (titulo, descricao) values ('Titulo 3', 'Texto de descricao 3');
insert into noticias (titulo, descricao) values ('Titulo 4', 'Texto de descricao 4');