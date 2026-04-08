-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: pokecloud
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pokemons`
--

DROP TABLE IF EXISTS `pokemons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `tipo` varchar(30) DEFAULT NULL,
  `nivel` int DEFAULT NULL,
  `hp` int DEFAULT NULL,
  `treinador` varchar(50) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemons`
--

LOCK TABLES `pokemons` WRITE;
/*!40000 ALTER TABLE `pokemons` DISABLE KEYS */;
INSERT INTO `pokemons` VALUES (1,'Pikachu','Elétrico',25,100,'Ash','http://localhost:3000/imagens/pikachu.jpg'),(8,'Snorlax','Normal',30,200,'Ash','http://localhost:3000/imagens/snorlax.jpg'),(9,'Gengar','Fantasma',28,105,'Cynthia','http://localhost:3000/imagens/gengar.jpg'),(11,'Vaporeon','Água',26,120,'Blue','http://localhost:3000/imagens/vaporeon.jpg'),(12,'Jolteon','Elétrico',27,115,'Blue','http://localhost:3000/imagens/jolteon.jpg'),(13,'Flareon','Fogo',27,118,'Blue','http://localhost:3000/imagens/flareon.jpg'),(14,'Machop','Lutador',21,102,'Brock','http://localhost:3000/imagens/machop.jpg'),(15,'Onix','Pedra',25,130,'Brock','http://localhost:3000/imagens/onix.jpg'),(16,'Pidgey','Voador',10,70,'Ash','http://localhost:3000/imagens/pidgey.jpg'),(17,'Rattata','Normal',12,65,'Youngster','http://localhost:3000/imagens/rattata.jpg'),(18,'Zubat','Venenoso',14,75,'Team Rocket','http://localhost:3000/imagens/zubat.jpg'),(20,'Dragonite','Dragãooo',350,1800,'Lanceee','http://localhost:3000/imagens/dragonite.jpg'),(28,'isaaa','agua',350,100,'Lanceee','http://localhost:3000/imagens/isa.jpg');
/*!40000 ALTER TABLE `pokemons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-07 20:26:18
