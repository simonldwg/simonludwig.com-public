-- CreateTable
 CREATE TABLE "Project" (
     "slug" TEXT NOT NULL PRIMARY KEY,
     "title" TEXT NOT NULL,
     "subtitle" TEXT,
     "category" TEXT CHECK ( category IN ('Personal', 'University', 'Work') ) NOT NULL,
     "description" TEXT NOT NULL,
     "githubURL" TEXT,
     "imageSmall" TEXT NOT NULL,
     "imageLarge" TEXT NOT NULL
 );

 -- CreateIndex
 CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");