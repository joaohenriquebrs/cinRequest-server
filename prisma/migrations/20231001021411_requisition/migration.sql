/*
  Warnings:

  - Added the required column `status` to the `Requisition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Requisition" ADD COLUMN     "status" TEXT NOT NULL;
