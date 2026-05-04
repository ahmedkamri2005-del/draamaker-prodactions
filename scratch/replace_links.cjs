const fs = require("fs");
const path = require("path");

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else {
            if (filePath.endsWith(".tsx") && !filePath.includes("contact")) {
                results.push(filePath);
            }
        }
    });
    return results;
};

const files = walk(path.join(__dirname, "../src/app"));

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let original = content;

    content = original.replace(/<Link\s+href="\/contact"([\s\S]*?)<\/Link>/g, "<button onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}$1</button>");
    
    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log("Updated", file);
    }
});
