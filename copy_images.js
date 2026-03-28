const fs = require('fs');

const srcDir = 'C:\\Users\\Renaldi Noviandi\\.gemini\\antigravity\\brain\\52df4c18-2a18-4c18-9821-8431efb41ac0\\';
const dstDir = 'd:\\Kerja\\orvion\\orvion\\img\\';

const bannerPath = srcDir + 'software_house_banner_1774659456011.png';
const teamPath = srcDir + 'software_house_team_1774659473118.png';
const servicePath = srcDir + 'software_house_service_1774659532444.png';
const clientPath = srcDir + 'software_house_client_1774659551112.png';

fs.copyFileSync(bannerPath, dstDir + 'carousel-1.jpg');
fs.copyFileSync(bannerPath, dstDir + 'carousel-2.jpg');
fs.copyFileSync(bannerPath, dstDir + 'about.png');
fs.copyFileSync(bannerPath, dstDir + 'footer-bg.png');

for (let i = 1; i <= 8; i++) {
    fs.copyFileSync(teamPath, dstDir + `team-${i}.jpg`);
}

for (let i = 1; i <= 4; i++) {
    fs.copyFileSync(servicePath, dstDir + `service-${i}.jpg`);
}

for (let i = 1; i <= 3; i++) {
    fs.copyFileSync(clientPath, dstDir + `testimonial-${i}.jpg`);
}

console.log('Images replaced!');
