CREATE TABLE public.paciente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    data_nascimento VARCHAR(10) NOT NULL CHECK (data_nascimento ~ '^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$'),
    telefone VARCHAR(11),
    senha TEXT NOT NULL
);