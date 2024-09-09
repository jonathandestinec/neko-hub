/*
  Warnings:

  - Added the required column `type` to the `Argument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Argument" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "type" TEXT NOT NULL;
