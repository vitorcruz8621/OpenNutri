CREATE TABLE IF NOT EXISTS public.meta (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    tipo_meta_id INTEGER NOT NULL,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP NOT NULL,
    status_meta_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES public.paciente(id),
    FOREIGN KEY (tipo_meta_id) REFERENCES public.tipo_meta(id),
    FOREIGN KEY (status_meta_id) REFERENCES public.status_meta(id)
);
