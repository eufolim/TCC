-- Active: 1669030982735@@127.0.0.1@3306@tcc_db
create database if not exists tcc_db;

use tcc_db;

create table if not exists questions (
    id int primary key unique auto_increment,
    question varchar(200),
    a varchar(40),
    b varchar(40),
    c varchar(40),
    d varchar(40),
    answer varchar(40),
    nivel varchar(10),
    backgrond varchar(500),
);

create table if not exists users (
    user_name varchar(40) not null primary key,
    user_email varchar(40) UNIQUE,
    user_password varchar(40) not null,
    birth_date date
);
