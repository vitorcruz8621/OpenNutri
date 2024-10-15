CREATE TABLE IF NOT EXISTS public.CONSULTA (
    id SERIAL PRIMARY KEY,
    nutricionista_id INTEGER NOT NULL,
    paciente_id INTEGER NOT NULL,
    data_consulta TIMESTAMP NOT NULL,
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (nutricionista_id) REFERENCES public.Nutricionista(id),
    FOREIGN KEY (paciente_id) REFERENCES public.PACIENTE(id)
);
