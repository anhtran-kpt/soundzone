/*
  Warnings:

  - You are about to drop the column `userAgent` on the `RefreshToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "userAgent",
ADD COLUMN     "deviceInfo" TEXT,
ADD COLUMN     "ipAddress" TEXT;
