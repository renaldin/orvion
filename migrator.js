const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (let file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // Header & Meta & Titles
    content = content.replace(/Poseify - Modeling Agency Website Template/g, 'Orvion - Professional Software House');
    content = content.replace(/<i class="[^"]*fa-face-smile me-1"><\/i>Poseify/g, '<i class="fa-solid fa-code me-1"></i>Orvion');
    content = content.replace(/>Poseify</g, '>Orvion<');
    content = content.replace(/Our Models/g, 'Our Team');
    
    // Team Metrics Original
    const teamBeforeOrigin = `<div class="team-before">
                                <span>Age</span>
                                <span>Height</span>
                                <span>Weight</span>
                                <span>Bust</span>
                                <span>Waist</span>
                                <span>Hips</span>
                            </div>`;
    // Team Metrics New
    const teamBeforeNew = `<div class="team-before">
                                <span>Role</span>
                                <span>Exp</span>
                                <span>Tech</span>
                                <span>Front</span>
                                <span>Back</span>
                                <span>DB</span>
                            </div>`;

    const teamAfterOrigin = `<div class="team-after">
                                <span>22</span>
                                <span>185</span>
                                <span>55</span>
                                <span>79</span>
                                <span>59</span>
                                <span>89</span>
                            </div>`;
    const teamAfterNew = `<div class="team-after">
                                <span>Fullstack</span>
                                <span>4 Yrs</span>
                                <span>JS</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>SQL</span>
                            </div>`;

    let escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    content = content.replace(new RegExp(escapeRegExp(teamBeforeOrigin), 'g'), teamBeforeNew);
    content = content.replace(new RegExp(escapeRegExp(teamAfterOrigin), 'g'), teamAfterNew);

    // General string replacements
    content = content.replace(/Models<\/h[1-6]>/g, 'Developers</h5>');
    content = content.replace(/Meet Our Models/g, 'Meet Our Developers');
    content = content.replace(/Modeling Agency/g, 'Software House');

    fs.writeFileSync(file, content);
}
console.log('Script finish');
