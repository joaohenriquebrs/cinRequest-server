/*
  Warnings:

  - Added the required column `studentEmail` to the `Requisition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Requisition" ADD COLUMN     "studentEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Requisition" ADD CONSTRAINT "Requisition_studentEmail_fkey" FOREIGN KEY ("studentEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
