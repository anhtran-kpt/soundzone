/*
  Warnings:

  - Made the column `releaseDate` on table `Album` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "releaseDate" SET NOT NULL,
ALTER COLUMN "releaseDate" SET DEFAULT CURRENT_TIMESTAMP;
