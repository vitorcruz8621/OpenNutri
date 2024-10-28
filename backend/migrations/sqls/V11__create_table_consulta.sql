CREATE TABLE public.consulta (
    id SERIAL PRIMARY KEY,
    nutricionista_id INTEGER NOT NULL,
    paciente_id INTEGER NOT NULL,
    status_id INTEGER NOT NULL,
    data_consulta VARCHAR(22) NOT NULL CHECK (
        data_consulta ~ '^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})_(0[8-9]|1[0-9]|20):(00|15|30|45)~(0[8-9]|1[0-9]|20):(00|15|30|45)$'
    ),
    observacoes TEXT,
    FOREIGN KEY (nutricionista_id) REFERENCES public.nutricionista(id),
    FOREIGN KEY (paciente_id) REFERENCES public.paciente(id),
    FOREIGN KEY (status_id) REFERENCES public.status_consulta(id)
);