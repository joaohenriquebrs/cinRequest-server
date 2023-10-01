/*
  Warnings:

  - You are about to drop the `requisition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "requisition";

-- CreateTable
CREATE TABLE "Requisition" (
    "id" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "requisitionType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,

    CONSTRAINT "Requisition_pkey" PRIMARY KEY ("id")
);
