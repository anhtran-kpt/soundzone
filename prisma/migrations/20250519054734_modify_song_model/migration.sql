/*
  Warnings:

  - You are about to drop the column `composers` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `lyricists` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `producers` on the `Song` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "composers",
DROP COLUMN "lyricists",
DROP COLUMN "producers",
ADD COLUMN     "composer" TEXT,
ADD COLUMN     "lyricist" TEXT,
ADD COLUMN     "producer" TEXT;
