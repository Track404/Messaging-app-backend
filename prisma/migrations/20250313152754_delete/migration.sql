-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_users1Id_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_users2Id_fkey";

-- DropForeignKey
ALTER TABLE "GroupUser" DROP CONSTRAINT "GroupUser_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupUser" DROP CONSTRAINT "GroupUser_userId_fkey";

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_users1Id_fkey" FOREIGN KEY ("users1Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_users2Id_fkey" FOREIGN KEY ("users2Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUser" ADD CONSTRAINT "GroupUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUser" ADD CONSTRAINT "GroupUser_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
