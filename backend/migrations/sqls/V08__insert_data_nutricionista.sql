INSERT INTO public.nutricionista (nome, email, senha, telefone)
VALUES 
('João da Silva', 'joao.silva@gmail.com', 'senha123', '11987654321'),
('Maria Oliveira', 'maria.oliveira@gmail.com', 'senha456', '21987654321'),
('Carlos Pereira', 'carlos.pereira@gmail.com', 'senha789', '31987654321')
ON CONFLICT DO NOTHING;
