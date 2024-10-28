CREATE TABLE public.nutricionista (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE CHECK (email ~ '^[a-z]+\.[a-z]+@gmail\.com$'),
    senha TEXT NOT NULL,
    telefone VARCHAR(11)
);
