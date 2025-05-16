/*
  Warnings:

  - You are about to drop the column `writers` on the `Song` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "writers",
ADD COLUMN     "composers" TEXT[];
