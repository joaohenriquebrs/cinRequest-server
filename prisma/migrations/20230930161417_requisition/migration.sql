/*
  Warnings:

  - You are about to drop the column `authorEmail` on the `Requisition` table. All the data in the column will be lost.
  - Added the required column `author_Email` to the `Requisition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Requisition" DROP CONSTRAINT "Requisition_authorEmail_fkey";

-- AlterTable
ALTER TABLE "Requisition" DROP COLUMN "authorEmail",
ADD COLUMN     "author_Email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Requisition" ADD CONSTRAINT "Requisition_author_Email_fkey" FOREIGN KEY ("author_Email") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
