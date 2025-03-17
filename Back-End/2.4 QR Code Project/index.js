import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Prompt user for URL input
inquirer
  .prompt([
    {
      type: "input",
      message: "Type your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // Generate QR code from the URL
    const qr_svg = qr.image(url, { type: "png" });

    // Save QR Code as an image file
    const qrFileName = "qr-code.png";
    qr_svg.pipe(fs.createWriteStream(qrFileName));
    console.log(`QR Code saved as ${qrFileName}`);

    // Save the URL input to a text file
    const txtFileName = "user-url.txt";
    fs.writeFileSync(txtFileName, url);
    console.log(`URL saved to ${txtFileName}`);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
