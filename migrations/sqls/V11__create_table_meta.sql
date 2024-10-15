CREATE TABLE IF NOT EXISTS public.meta (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    tipo_meta_id INTEGER NOT NULL,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP NOT NULL,
    status_meta_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (paciente_id) REFERENCES public.Paciente(id),
    FOREIGN KEY (tipo_meta_id) REFERENCES public.TipoMeta(id),
    FOREIGN KEY (status_meta_id) REFERENCES public.StatusMeta(id)
);
