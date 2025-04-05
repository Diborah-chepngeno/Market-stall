/*
  Warnings:

  - You are about to drop the column `vendorId` on the `Stall` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stall" DROP CONSTRAINT "Stall_vendorId_fkey";

-- AlterTable
ALTER TABLE "Stall" DROP COLUMN "vendorId";
