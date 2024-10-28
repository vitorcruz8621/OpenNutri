CREATE TABLE public.consulta (
    id SERIAL PRIMARY KEY,
    nutricionista_id INTEGER NOT NULL,
    paciente_id INTEGER NOT NULL,
    status_id INTEGER NOT NULL,
    data_consulta VARCHAR(10) NOT NULL CHECK (data_consulta ~ '^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$'),
    horario_inicio VARCHAR(5) NOT NULL CHECK (horario_inicio ~ '^(?:[01]\d|2[0-3]):[0-5]\d$'),
    horario_termino VARCHAR(5) NOT NULL CHECK (horario_termino ~ '^(?:[01]\d|2[0-3]):[0-5]\d$'),
    observacoes TEXT,
    FOREIGN KEY (nutricionista_id) REFERENCES public.nutricionista(id),
    FOREIGN KEY (paciente_id) REFERENCES public.paciente(id),
    FOREIGN KEY (status_id) REFERENCES public.status_consulta(id)
);