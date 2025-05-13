/*
  Warnings:

  - Made the column `slug` on table `Genre` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Genre" ALTER COLUMN "slug" SET NOT NULL;
