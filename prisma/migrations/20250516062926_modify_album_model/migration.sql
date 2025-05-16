-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "duration" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "lyricists" TEXT[];
