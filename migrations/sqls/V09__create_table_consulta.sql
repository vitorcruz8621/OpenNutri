CREATE TABLE IF NOT EXISTS public.consulta (
    id SERIAL PRIMARY KEY,
    nutricionista_id INTEGER NOT NULL,
    paciente_id INTEGER NOT NULL,
    data_consulta TIMESTAMP NOT NULL,
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (nutricionista_id) REFERENCES public.nutricionista(id),
    FOREIGN KEY (paciente_id) REFERENCES public.paciente(id)
);
