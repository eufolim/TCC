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
backgrond varchar(500)
);
