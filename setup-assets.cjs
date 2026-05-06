const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const BASE_DIR = path.join(__dirname, 'public', 'works');
const SUBFOLDERS = ['commercial', 'tv', 'music'];

function cleanName(name) {
    return name
        .replace(/\.webm$/i, '')
        .replace(/Commercials\s*-\s*/i, '')
        .replace(/TV\s*-\s*Trailer\s*/i, '')
        .replace(/TV\s*-\s*trailer\s*/i, '')
        .replace(/on\s*Vimeo/i, '')
        .replace(/-on-Vimeo/i, '')
        .replace(/\s*-\s*$/i, '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, ''); // Remove special chars like accent symbols
}

function generatePoster(title, filename) {
    const width = 800;
    const height = 1200;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, '#121212');
    grad.addColorStop(1, '#000000');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 60px serif';
    
    const displayTitle = title.replace(/-/g, ' ').toUpperCase();
    ctx.fillText(displayTitle, width / 2, height / 2);

    ctx.strokeStyle = 'rgba(0, 174, 239, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(BASE_DIR, `${filename}.jpg`), buffer);
    console.log(`[POSTER] Generated: ${filename}.jpg`);
}

async function processAssets() {
    console.log('Starting Asset Setup...');
    
    SUBFOLDERS.forEach(sub => {
        const subPath = path.join(BASE_DIR, sub);
        if (!fs.existsSync(subPath)) return;

        const files = fs.readdirSync(subPath).filter(f => f.endsWith('.webm'));
        
        files.forEach(file => {
            const oldPath = path.join(subPath, file);
            const newBase = cleanName(file);
            const newPath = path.join(subPath, `${newBase}.webm`);

            // 1. Rename Video
            if (oldPath !== newPath) {
                fs.renameSync(oldPath, newPath);
                console.log(`[VIDEO] Renamed: ${file} -> ${newBase}.webm`);
            }

            // 2. Generate Poster (only if not already a custom cinematic one)
            // Note: We skip if we already generated a high-end one manually before
            const posterPath = path.join(BASE_DIR, `${newBase}.jpg`);
            if (!fs.existsSync(posterPath) || fs.statSync(posterPath).size < 50000) { // If < 50kb it's likely a simple placeholder
                generatePoster(newBase, newBase);
            }
        });
    });

    console.log('Done!');
}

processAssets();
