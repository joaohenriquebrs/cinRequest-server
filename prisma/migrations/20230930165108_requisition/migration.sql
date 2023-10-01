/*
  Warnings:

  - You are about to drop the column `authorEmail` on the `Requisition` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Requisition" DROP CONSTRAINT "Requisition_authorEmail_fkey";

-- AlterTable
ALTER TABLE "Requisition" DROP COLUMN "authorEmail";
