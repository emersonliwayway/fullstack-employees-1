DROP TABLE IF EXISTS fullstack_employees;
CREATE DATABASE fullstack_employees;

-- create table (schema)
CREATE TABLE employees (
    id serial PRIMARY KEY,
    name text NOT NULL,
    birthday date NOT NULL,
    salary integer NOT NULL
);
