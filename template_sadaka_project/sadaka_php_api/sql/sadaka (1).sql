-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2024 at 09:08 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sadaka`
--

-- --------------------------------------------------------

--
-- Table structure for table `donnetions`
--

CREATE TABLE `donnetions` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donnetions`
--

INSERT INTO `donnetions` (`id`, `amount`, `firstName`, `lastName`, `email`, `phone`, `address`, `note`, `created_at`) VALUES
(1, 0.00, '', '', '', '', '', '', '2024-07-14 02:48:33'),
(2, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:49'),
(3, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:49'),
(4, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:51'),
(5, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:51'),
(6, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:51'),
(7, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:51'),
(8, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:51'),
(9, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:52'),
(10, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:52'),
(11, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:52'),
(12, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:52'),
(13, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:52'),
(14, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:52'),
(15, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:53'),
(16, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:53'),
(17, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:53'),
(18, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:53'),
(19, 0.00, '', '', '', '', '', '', '2024-07-14 02:49:54'),
(20, 0.00, '', '', '', '', '', '', '2024-07-14 02:50:06'),
(21, 0.00, '', '', '', '', '', '', '2024-07-14 03:21:02'),
(22, 8978267.00, 'raihan', 'raju', 'raju@gmail.com', '01545444', 'lalbagh ', 'good', '2024-07-14 03:22:44'),
(23, 8978267.00, 'raihan', 'raju', 'raju@gmail.com', '01545444', 'lalbagh ', 'good', '2024-07-14 03:23:13'),
(24, 0.00, '', '', '', '', '', '', '2024-07-14 03:25:14'),
(25, 0.00, '', '', '', '', '', '', '2024-07-14 03:25:14'),
(26, 0.00, '', '', '', '', '', '', '2024-07-14 03:25:17'),
(27, 0.00, '', '', '', '', '', '', '2024-07-14 03:25:17'),
(28, 0.00, '', '', '', '', '', '', '2024-07-14 03:25:17');

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE `volunteers` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `volunteers`
--

INSERT INTO `volunteers` (`id`, `fname`, `lname`, `email`, `phone`, `address`, `note`) VALUES
(1, 'raihan', 'raju', 'raju@gmail.com', '01545444', 'lalbagh', 'goooood'),
(2, 'raihan', 'raju', 'raju@gmail.com', '01545444', 'lalbagh', 'goooood');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donnetions`
--
ALTER TABLE `donnetions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `volunteers`
--
ALTER TABLE `volunteers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donnetions`
--
ALTER TABLE `donnetions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `volunteers`
--
ALTER TABLE `volunteers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
