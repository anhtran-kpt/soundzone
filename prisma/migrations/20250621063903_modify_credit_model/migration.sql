/*
  Warnings:

  - You are about to drop the column `artistId` on the `Credit` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_artistId_fkey";

-- DropIndex
DROP INDEX "Credit_artistId_idx";

-- DropIndex
DROP INDEX "Credit_trackId_artistId_role_key";

-- AlterTable
ALTER TABLE "Credit" DROP COLUMN "artistId";
