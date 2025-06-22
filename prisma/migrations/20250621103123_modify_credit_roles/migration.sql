/*
  Warnings:

  - You are about to drop the column `role` on the `Credit` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Credit_role_idx";

-- AlterTable
ALTER TABLE "Credit" DROP COLUMN "role",
ADD COLUMN     "roles" "CreditRole"[];
