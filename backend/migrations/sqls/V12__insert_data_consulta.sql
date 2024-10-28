INSERT INTO public.consulta 
    (nutricionista_id, paciente_id, status_id, data_consulta, observacoes) 
VALUES
    (1, 1, 1, '01/10/2024_12:00~12:00', 'Consulta inicial para avaliação nutricional.'),
    (1, 2, 1, '05/10/2024_12:00~12:00', 'Acompanhamento da dieta low carb.'),
    (1, 3, 1, '10/10/2024_12:00~12:00', 'Discussão sobre resultados de exames.'),
    (1, 4, 1, '12/10/2024_12:00~12:00', 'Reavaliação da dieta após 3 meses.'),
    (1, 5, 1, '15/10/2024_12:00~12:00', 'Orientações sobre suplementação.'),
    (1, 6, 1, '20/10/2024_12:00~12:00', 'Dúvidas sobre a dieta vegetariana.'),
    (1, 7, 1, '25/10/2024_12:00~12:00', 'Revisão dos hábitos alimentares.'),
    (2, 8, 1, '28/10/2024_12:00~12:00', 'Ajustes na dieta esportiva.'),
    (1, 9, 1, '30/10/2024_12:00~12:00', 'Planejamento de refeições para o mês.'),
    (1, 10, 1, '01/11/2024_12:00~12:00', 'Consulta para feedback sobre o progresso.')
ON CONFLICT DO NOTHING;