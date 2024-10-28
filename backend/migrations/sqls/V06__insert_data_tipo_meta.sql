INSERT INTO 
    public.tipo_meta (descricao) 
VALUES 
    ('Emagrecimento'), 
    ('Ganho de massa magra'),
    ('Manutenção'),
    ('Melhora da performance atlética'),
    ('Aumento da energia'),
    ('Redução de colesterol'),
    ('Controle de diabetes'),
    ('Aumento da imunidade'),
    ('Saúde intestinal'),
    ('Alimentação saudável para gestantes'),
    ('Controle de alergias ou intolerâncias alimentares'),
    ('Pré e pós-operatório')
ON CONFLICT DO NOTHING;