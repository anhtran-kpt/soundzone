/*
  Warnings:

  - You are about to drop the column `deviceInfo` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `RefreshToken` table. All the data in the column will be lost.
  - Added the required column `deviceType` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "deviceInfo",
DROP COLUMN "ipAddress",
ADD COLUMN     "deviceType" TEXT NOT NULL;
