const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, 'public', 'works');

// Ensure the directory exists
if (!fs.existsSync(worksDir)) {
    fs.mkdirSync(worksDir, { recursive: true });
}

const newProjects = [
    { title: "Egypt Underworld", filename: "egypt-underworld.jpg" },
    { title: "Kingdom of David", filename: "kingdom-of-david.jpg" },
    { title: "Lets Shop", filename: "lets-shop.jpg" },
    { title: "Stranded with Peter", filename: "stranded-with-peter.jpg" },
    { title: "The Battle of Tripoli", filename: "battle-of-tripoli.jpg" },
    { title: "Airtel", filename: "airtel.jpg" },
    { title: "Bajaj", filename: "bajaj.jpg" },
    { title: "Baloise Assurance", filename: "baloise.jpg" },
    { title: "BMW", filename: "bmw.jpg" },
    { title: "COMVIQ", filename: "comviq.jpg" },
    { title: "FIFA", filename: "fifa.jpg" },
    { title: "Grand Prix", filename: "grand-prix.jpg" },
    { title: "Honda", filename: "honda.jpg" },
    { title: "Hugo Boss", filename: "hugo-boss.jpg" },
    { title: "Life Platinum", filename: "life-platinum.jpg" },
    { title: "Livon Silk Oil", filename: "livon.jpg" },
    { title: "The Pyramids", filename: "pyramids.jpg" },
    { title: "Tine Piano", filename: "tine-piano.jpg" },
    { title: "Toro", filename: "toro.jpg" },
    { title: "TUI", filename: "tui.jpg" },
    { title: "Ulala Mango", filename: "ulala-mango.jpg" },
    { title: "Despina Vandi", filename: "despina-vandi.jpg" }
];

async function generateImage(project) {
    const width = 800;
    const height = 1200;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 1. Background Gradient (Sleek Dark)
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#1a1a1a'); // Dark charcoal
    gradient.addColorStop(1, '#000000'); // Pure black
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Subtle Cinematic Grain/Texture (Optional but adds premium feel)
    ctx.globalAlpha = 0.05;
    for (let i = 0; i < 5000; i++) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
    }
    ctx.globalAlpha = 1.0;

    // 3. Text Styling
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Title - Elegant Serif-style fallback
    ctx.font = 'bold 60px serif'; 
    
    // Simple wrap text if too long
    const words = project.title.toUpperCase().split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const widthText = ctx.measureText(currentLine + " " + word).width;
        if (widthText < width * 0.8) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);

    const lineHeight = 80;
    const startY = (height / 2) - ((lines.length - 1) * lineHeight / 2);

    lines.forEach((line, index) => {
        ctx.fillText(line, width / 2, startY + (index * lineHeight));
    });

    // 4. Accent line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.4, startY + (lines.length * lineHeight) + 20);
    ctx.lineTo(width * 0.6, startY + (lines.length * lineHeight) + 20);
    ctx.stroke();

    // 5. Save
    const buffer = canvas.toBuffer('image/jpeg');
    const outputPath = path.join(worksDir, project.filename);
    fs.writeFileSync(outputPath, buffer);
    console.log(`Generated: ${project.filename}`);
}

async function main() {
    console.log("Starting placeholder generation...");
    for (const project of newProjects) {
        await generateImage(project);
    }
    console.log("All placeholders generated successfully!");
}

main();
