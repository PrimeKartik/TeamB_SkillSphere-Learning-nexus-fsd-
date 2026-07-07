-- SkillSphere Learning Nexus - MySQL Schema
-- Note: Hibernate (ddl-auto=update) will also create these automatically,
-- but this script is handy for manual setup / review.

CREATE DATABASE IF NOT EXISTS skillsphere_db;
USE skillsphere_db;

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NULL,       -- BCrypt hash; NULL for Google-only accounts
    role VARCHAR(20) NOT NULL DEFAULT 'STUDENT',
    provider VARCHAR(20) NOT NULL DEFAULT 'LOCAL',   -- LOCAL or GOOGLE
    google_id VARCHAR(100) UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    badge VARCHAR(20),
    badge_color VARCHAR(30),
    level VARCHAR(30),
    duration VARCHAR(30),
    rating DOUBLE,
    reviews VARCHAR(20),
    price DECIMAL(10,2)
);
