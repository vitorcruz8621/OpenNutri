INSERT INTO public.status_consulta (descricao) VALUES
('Agendado'),
('Cancelado'),
('Concluído'),
('Em Andamento'),
('Não Compareceu'),
('Remarcado')
ON CONFLICT DO NOTHING;