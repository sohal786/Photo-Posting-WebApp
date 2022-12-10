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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `fk_authorId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `postauthor_idx` (`fk_authorId`),
  CONSTRAINT `postauthor` FOREIGN KEY (`fk_authorId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'d','d','public/images/uploads/uploadImage-1670385699826-495671721.jpeg','public/images/uploads/thumbnail-uploadImage-1670385699826-495671721.jpeg',3,'2022-12-06 20:01:39'),(2,'d','d','public/images/uploads/uploadImage-1670385715826-113052948.jpeg','public/images/uploads/thumbnail-uploadImage-1670385715826-113052948.jpeg',3,'2022-12-06 20:01:55'),(3,'d','d','public/images/uploads/uploadImage-1670385734344-635575980.jpeg','public/images/uploads/thumbnail-uploadImage-1670385734344-635575980.jpeg',3,'2022-12-06 20:02:14'),(4,'knki','njknk','public/images/uploads/uploadImage-1670577543440-50443355.png','public/images/uploads/thumbnail-uploadImage-1670577543440-50443355.png',3,'2022-12-09 01:19:04'),(5,'fr','frf','public/images/uploads/uploadImage-1670621219070-882510517.png','public/images/uploads/thumbnail-uploadImage-1670621219070-882510517.png',3,'2022-12-09 13:26:59'),(6,'rfrf','rfrfr','public/images/uploads/uploadImage-1670621259180-371263442.png','public/images/uploads/thumbnail-uploadImage-1670621259180-371263442.png',3,'2022-12-09 13:27:39'),(7,'iujniono','mkonmo','public/images/uploads/uploadImage-1670622011478-510273365.png','public/images/uploads/thumbnail-uploadImage-1670622011478-510273365.png',3,'2022-12-09 13:40:12'),(8,'mniomok','noinoi','public/images/uploads/uploadImage-1670622020478-343054240.png','public/images/uploads/thumbnail-uploadImage-1670622020478-343054240.png',3,'2022-12-09 13:40:21'),(9,'miomokm','nkmnmn','public/images/uploads/uploadImage-1670622030386-796159043.jpeg','public/images/uploads/thumbnail-uploadImage-1670622030386-796159043.jpeg',3,'2022-12-09 13:40:30'),(10,'oimnokm','miomi','public/images/uploads/uploadImage-1670622038746-255639537.png','public/images/uploads/thumbnail-uploadImage-1670622038746-255639537.png',3,'2022-12-09 13:40:39'),(11,'lk','nomlk','public/images/uploads/uploadImage-1670622132200-811358484.jpeg','public/images/uploads/thumbnail-uploadImage-1670622132200-811358484.jpeg',3,'2022-12-09 13:42:12'),(12,'jkn','jkn','public/images/uploads/uploadImage-1670622188938-609235082.jpeg','public/images/uploads/thumbnail-uploadImage-1670622188938-609235082.jpeg',3,'2022-12-09 13:43:08'),(13,'mi','noin','public/images/uploads/uploadImage-1670622277002-915324628.jpeg','public/images/uploads/thumbnail-uploadImage-1670622277002-915324628.jpeg',3,'2022-12-09 13:44:37'),(14,'ijmik','nkn','public/images/uploads/uploadImage-1670622288206-564205394.jpeg','public/images/uploads/thumbnail-uploadImage-1670622288206-564205394.jpeg',3,'2022-12-09 13:44:48'),(15,'n','ijmi','public/images/uploads/uploadImage-1670622306638-386326086.jpeg','public/images/uploads/thumbnail-uploadImage-1670622306638-386326086.jpeg',3,'2022-12-09 13:45:06'),(16,'knk','j nj','public/images/uploads/uploadImage-1670622327788-610931925.jpeg','public/images/uploads/thumbnail-uploadImage-1670622327788-610931925.jpeg',3,'2022-12-09 13:45:27'),(17,'jn',' j','public/images/uploads/uploadImage-1670622375966-974917057.jpeg','public/images/uploads/thumbnail-uploadImage-1670622375966-974917057.jpeg',3,'2022-12-09 13:46:15'),(18,'j ','jn','public/images/uploads/uploadImage-1670622413723-261239707.jpeg','public/images/uploads/thumbnail-uploadImage-1670622413723-261239707.jpeg',3,'2022-12-09 13:46:53'),(19,'ijmi','ijioj','public/images/uploads/uploadImage-1670622516607-208880118.jpeg','public/images/uploads/thumbnail-uploadImage-1670622516607-208880118.jpeg',3,'2022-12-09 13:48:36'),(20,'ferfref','rferfe','public/images/uploads/uploadImage-1670630948984-461192191.png','public/images/uploads/thumbnail-uploadImage-1670630948984-461192191.png',4,'2022-12-09 16:09:09');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
