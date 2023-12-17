/*
  Warnings:

  - You are about to drop the column `submission` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `visit` on the `Form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "submission",
DROP COLUMN "visit",
ADD COLUMN     "submissions" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "visits" INTEGER NOT NULL DEFAULT 0;
