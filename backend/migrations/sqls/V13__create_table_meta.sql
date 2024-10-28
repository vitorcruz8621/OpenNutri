CREATE TABLE IF NOT EXISTS public.meta (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    tipo_meta_id INTEGER NOT NULL,
    data_inicio VARCHAR(10) NOT NULL CHECK (data_inicio ~ '^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$'),
    data_fim VARCHAR(10) NOT NULL CHECK (data_fim ~ '^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$'),
    status_meta_id INTEGER NOT NULL,
    FOREIGN KEY (paciente_id) REFERENCES public.paciente(id),
    FOREIGN KEY (tipo_meta_id) REFERENCES public.tipo_meta(id),
    FOREIGN KEY (status_meta_id) REFERENCES public.status_meta(id)
);
