INSERT INTO public.paciente (nome, email, data_nascimento, telefone, senha) 
VALUES 
('Ana Costa', 'ana.costa@gmail.com', '15/11/2024', '11987654321', 'senhaAna123'),
('Bruno Alves', 'bruno.alves@gmail.com', '22/03/1985', '21987654322', 'senhaBruno456'),
('Carla Mendes', 'carla.mendes@gmail.com', '30/11/1992', '31987654323', 'senhaCarla789'),
('Daniela Santos', 'daniela.santos@gmail.com', '14/07/1988', '41987654324', 'senhaDaniela101'),
('Eduardo Lima', 'eduardo.lima@gmail.com', '28/02/1995', '51987654325', 'senhaEduardo202'),
('Fernanda Rocha', 'fernanda.rocha@gmail.com', '11/09/1991', '61987654326', 'senhaFernanda303'),
('Gustavo Nunes', 'gustavo.nunes@gmail.com', '01/12/1987', '71987654327', 'senhaGustavo404'),
('Heloísa Freitas', 'heloisa.freitas@gmail.com', '05/10/1993', '81987654328', 'senhaHeloisa505'),
('Igor Pires', 'igor.pires@gmail.com', '18/06/1989', '91987654329', 'senhaIgor606'),
('Juliana Martins', 'juliana.martins@gmail.com', '24/04/1994', '11987654330', 'senhaJuliana707')
ON CONFLICT DO NOTHING;