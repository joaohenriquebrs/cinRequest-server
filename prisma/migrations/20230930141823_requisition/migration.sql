-- CreateTable
CREATE TABLE "requisition" (
    "id" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "requisitionType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,

    CONSTRAINT "requisition_pkey" PRIMARY KEY ("id")
);
