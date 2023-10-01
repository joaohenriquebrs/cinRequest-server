-- AlterTable
ALTER TABLE "Requisition" ADD COLUMN     "response" TEXT NOT NULL DEFAULT 'Aguardando resposta',
ALTER COLUMN "status" SET DEFAULT 'Aberto';
