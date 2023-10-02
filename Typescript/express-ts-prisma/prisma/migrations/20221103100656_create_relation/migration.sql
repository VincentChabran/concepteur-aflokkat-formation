-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "copineId" INTEGER,
    "managerId" INTEGER,
    CONSTRAINT "User_copineId_fkey" FOREIGN KEY ("copineId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("admin", "email", "id", "username") SELECT "admin", "email", "id", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_copineId_key" ON "User"("copineId");
CREATE UNIQUE INDEX "User_managerId_key" ON "User"("managerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
