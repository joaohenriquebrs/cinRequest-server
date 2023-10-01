/*
  Warnings:

  - Added the required column `authorEmail` to the `Requisition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Requisition" ADD COLUMN     "authorEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Requisition" ADD CONSTRAINT "Requisition_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
