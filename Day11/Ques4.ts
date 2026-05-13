// 4. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.

type FolderNode = {
    name: string;
    files?: string[];
    subFolders?: FolderNode[];
};
const folderStructure: FolderNode = {
    name: "Root",
    files: ["readme.txt", "config.json"],
    subFolders: [
        {
            name: "Documents",
            files: ["resume.docx", "notes.pdf"]
        },
        {
            name: "Projects",
            subFolders: [
                {
                    name: "TypeScript",
                    files: ["app.ts", "index.ts"]
                },
                {
                    name: "Java",

                    files: ["Main.java"]
                }
            ]
        }
    ]
};
console.log(folderStructure);