/*
  Warnings:

  - You are about to drop the `Credit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_artistId_fkey";

-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_songId_fkey";

-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "releaseType" SET DEFAULT 'SINGLE';

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "composers" TEXT[],
ADD COLUMN     "lyricists" TEXT[],
ADD COLUMN     "producers" TEXT[];

-- DropTable
DROP TABLE "Credit";

-- DropEnum
DROP TYPE "CreditRole";
