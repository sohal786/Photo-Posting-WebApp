-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `fk_authorId` int NOT NULL,
  `fk_postId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `commentauthor_idx` (`fk_authorId`),
  KEY `commentpost_idx` (`fk_postId`),
  CONSTRAINT `commentauthor` FOREIGN KEY (`fk_authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `commentpost` FOREIGN KEY (`fk_postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'dvcdfvvf',3,3,'2022-12-08 21:29:27'),(2,'k kjl kj \n\n',3,3,'2022-12-08 21:48:52'),(3,'k kjl kj \n\nmkj kj kj kj lk kjl',3,3,'2022-12-08 21:48:56'),(4,'k kjl kj \n\nmkj kj kj kj lk kjl',3,3,'2022-12-08 21:48:57'),(5,'k kjl kj \n\nmkj kj kj kj lk kjl',3,3,'2022-12-08 21:48:58'),(6,'k kjl kj \n\nmkj kj kj kj lk kjl',3,3,'2022-12-08 21:48:59'),(7,'k kjl kj \n\nlmlkmlkm\n\n',3,3,'2022-12-08 21:49:13'),(8,'k kjl kj \n\nlmlkmlkm\n\n',3,3,'2022-12-08 21:49:19'),(9,'k kjl kj \n\nlmlkmlkm\nkmlkmklm\n',3,3,'2022-12-08 21:50:19'),(10,'junijneirufner',3,3,'2022-12-08 23:25:13'),(11,'=jrnfijernfre',3,3,'2022-12-08 23:25:23'),(12,'=jrnfijernfre',3,3,'2022-12-08 23:25:23'),(13,'=jrnfijernfre',3,3,'2022-12-08 23:25:24'),(14,'=jrnfijernfre',3,3,'2022-12-08 23:25:25'),(15,'=jrnfijernfre',3,3,'2022-12-08 23:25:26'),(16,'=jrnfijernfre',3,3,'2022-12-08 23:25:26'),(17,'rgergrtgrtgrthrthrtoph',3,3,'2022-12-08 23:38:15'),(18,'klklmlk;',3,4,'2022-12-09 02:20:22'),(19,'ojlknkj\n',3,2,'2022-12-09 11:31:19'),(20,'jn jk kjkkj',3,17,'2022-12-09 13:47:57'),(21,'jn jk kjkkj jkkjn k',3,17,'2022-12-09 13:48:04'),(22,'vfdbvdfgb',4,19,'2022-12-09 19:06:40'),(23,'jfk vkjef v\nfvfvf',4,19,'2022-12-09 19:16:27'),(24,'nkjkjk;j',4,19,'2022-12-09 19:25:33'),(25,'mklnljkn',4,19,'2022-12-09 19:29:05'),(26,'jk jk kj kjljknl\'knjkn',4,20,'2022-12-09 19:31:07'),(27,'nkj jnkjnkjn',4,20,'2022-12-09 19:31:12'),(28,'jkjnkjn k',4,20,'2022-12-09 19:31:16'),(29,'aman is aaa looooooooserrrrrrrrrrrrr',4,14,'2022-12-09 19:32:32'),(30,'akhay is the best',4,14,'2022-12-09 19:32:49'),(31,'dxfbvdfvdf',4,19,'2022-12-09 19:47:19'),(32,'dxfbvdfvdfvdfvdfbdf',4,19,'2022-12-09 19:47:21'),(33,'jnnjn jk nkj ',4,19,'2022-12-09 19:53:00'),(34,'ojokmnokmoim',4,19,'2022-12-09 19:53:04'),(35,'ojokmnokmoim',4,19,'2022-12-09 19:53:41'),(36,'ojokmnokmoim',4,19,'2022-12-09 19:53:43'),(37,'rvfvfvfdv',4,19,'2022-12-09 20:08:39'),(38,'rvfvfvfdvdfvdfvdfbvdfbdgfbvdfvdfvdfv',4,19,'2022-12-09 20:08:46'),(39,'dfvdfvdfvdfvf',4,19,'2022-12-09 20:08:48'),(40,'dvdfvdfvdfv',4,19,'2022-12-09 20:08:51'),(41,'dfvdfvdfv',4,18,'2022-12-09 20:09:16'),(42,'dfvdfvdfvdfvdfvdf',4,18,'2022-12-09 20:09:18'),(43,'dfvdfvdfvdfvdfvdfdfvdfvd',4,18,'2022-12-09 20:09:19'),(44,'dfvdfvfd',4,18,'2022-12-09 20:09:25'),(45,'fvfvdfvdv',4,18,'2022-12-09 20:09:28'),(46,'dfvdfvdfvdfvf',4,18,'2022-12-09 20:09:51'),(47,'dfvdfvdvfd',4,20,'2022-12-09 20:09:57'),(48,'dfvdfvdvfdvdfvdfv',4,20,'2022-12-09 20:09:59'),(49,'dfvdfvdvf',4,20,'2022-12-09 20:10:02'),(50,' kjn kj kj',4,18,'2022-12-09 20:13:11'),(51,' kjn kj kj kj kj nkj',4,18,'2022-12-09 20:13:14'),(52,' kj kj k',4,18,'2022-12-09 20:20:16');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-09 21:22:05
