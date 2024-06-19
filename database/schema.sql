-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema contacts_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema contacts_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `contacts_db` ;
USE `contacts_db` ;

-- -----------------------------------------------------
-- Table `contacts_db`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contacts_db`.`contact` (
  `id` INT(14) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `age` INT(3) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `contacts_db`.`phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contacts_db`.`phone` (
  `id` INT(14) NOT NULL AUTO_INCREMENT,
  `number` VARCHAR(16) NULL,
  `contact_id` INT(14) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_phone_contact_idx` (`contact_id` ASC),
  CONSTRAINT `fk_phone_contact`
    FOREIGN KEY (`contact_id`)
    REFERENCES `contacts_db`.`contact` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
