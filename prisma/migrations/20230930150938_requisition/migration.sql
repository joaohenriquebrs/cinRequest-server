/*
  Warnings:

  - You are about to drop the column `authortEmail` on the `Requisition` table. All the data in the column will be lost.
  - Added the required column `authorEmail` to the `Requisition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Requisition" DROP CONSTRAINT "Requisition_authortEmail_fkey";

-- AlterTable
ALTER TABLE "Requisition" DROP COLUMN "authortEmail",
ADD COLUMN     "authorEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Requisition" ADD CONSTRAINT "Requisition_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
