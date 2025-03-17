// Import the fs module (File System)
const fs = require("fs");

// Write to a file (Creates or Overwrites "message.txt")
fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("✅ The file has been saved!");

    // Read the file after writing
    fs.readFile("message.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("📄 File Content:", data);
    });
});
