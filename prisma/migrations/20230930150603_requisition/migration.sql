/*
  Warnings:

  - You are about to drop the column `studentEmail` on the `Requisition` table. All the data in the column will be lost.
  - Added the required column `authortEmail` to the `Requisition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Requisition" DROP CONSTRAINT "Requisition_studentEmail_fkey";

-- AlterTable
ALTER TABLE "Requisition" DROP COLUMN "studentEmail",
ADD COLUMN     "authortEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Requisition" ADD CONSTRAINT "Requisition_authortEmail_fkey" FOREIGN KEY ("authortEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
