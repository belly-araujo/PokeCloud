USE pokecloud;

CREATE TABLE pokemons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    tipo VARCHAR(30),
    nivel INT,
    hp INT,
    treinador VARCHAR(50)
);

INSERT INTO pokemons (nome, tipo, nivel, hp, treinador) VALUES
('Pikachu', 'Elétrico', 25, 100, 'Ash'),
('Charmander', 'Fogo', 18, 90, 'Red'),
('Bulbasaur', 'Planta', 20, 95, 'Leaf'),
('Squirtle', 'Água', 22, 98, 'Misty'),
('Jigglypuff', 'Fada', 15, 110, 'Lillie'),
('Meowth', 'Normal', 17, 85, 'Giovanni'),
('Psyduck', 'Água', 19, 92, 'Misty'),
('Snorlax', 'Normal', 30, 200, 'Ash'),
('Gengar', 'Fantasma', 28, 105, 'Cynthia'),
('Eevee', 'Normal', 16, 88, 'Serena'),
('Vaporeon', 'Água', 26, 120, 'Blue'),
('Jolteon', 'Elétrico', 27, 115, 'Blue'),
('Flareon', 'Fogo', 27, 118, 'Blue'),
('Machop', 'Lutador', 21, 102, 'Brock'),
('Onix', 'Pedra', 25, 130, 'Brock'),
('Pidgey', 'Voador', 10, 70, 'Ash'),
('Rattata', 'Normal', 12, 65, 'Youngster'),
('Zubat', 'Venenoso', 14, 75, 'Team Rocket'),
('Abra', 'Psíquico', 13, 60, 'Sabrina'),
('Dragonite', 'Dragão', 35, 180, 'Lance');

ALTER TABLE pokemons 
ADD COLUMN imagem VARCHAR(255);

USE pokecloud;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/pikachu.jpg' WHERE id=1;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/snorlax.jpg' WHERE id=8;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/gengar.jpg' WHERE id=9;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/vaporeon.jpg' WHERE id=11;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/jolteon.jpg' WHERE id=12;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/flareon.jpg' WHERE id=13;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/machop.jpg' WHERE id=14;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/onix.jpg' WHERE id=15;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/pidgey.jpg' WHERE id=16;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/rattata.jpg' WHERE id=17;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/zubat.jpg' WHERE id=18;
UPDATE pokemons SET imagem='http://localhost:3000/imagens/dragonite.jpg' WHERE id=20;
