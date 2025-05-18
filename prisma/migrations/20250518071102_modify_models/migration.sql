/*
  Warnings:

  - The values [COMPILATION] on the enum `ReleaseType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `AlbumArtist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `artistId` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ReleaseType_new" AS ENUM ('SINGLE', 'ALBUM', 'EP');
ALTER TABLE "Album" ALTER COLUMN "releaseType" DROP DEFAULT;
ALTER TABLE "Album" ALTER COLUMN "releaseType" TYPE "ReleaseType_new" USING ("releaseType"::text::"ReleaseType_new");
ALTER TYPE "ReleaseType" RENAME TO "ReleaseType_old";
ALTER TYPE "ReleaseType_new" RENAME TO "ReleaseType";
DROP TYPE "ReleaseType_old";
ALTER TABLE "Album" ALTER COLUMN "releaseType" SET DEFAULT 'ALBUM';
COMMIT;

-- DropForeignKey
ALTER TABLE "AlbumArtist" DROP CONSTRAINT "AlbumArtist_albumId_fkey";

-- DropForeignKey
ALTER TABLE "AlbumArtist" DROP CONSTRAINT "AlbumArtist_artistId_fkey";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "artistId" TEXT NOT NULL;

-- DropTable
DROP TABLE "AlbumArtist";

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
