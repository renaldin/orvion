const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (let file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // Footer icon
    content = content.replace(/<i class="[^"]*fa-face-smile me-1"><\/i>Orvion/g, '<i class="fa-solid fa-code me-1"></i>Orvion');
    
    // Services
    content = content.replace(/<h3 class="text-uppercase">Fashion Shows<\/h3>/g, '<h3 class="text-uppercase">Website Development</h3>');
    content = content.replace(/<h3 class="text-uppercase">Corporate Events<\/h3>/g, '<h3 class="text-uppercase">Mobile Applications</h3>');
    content = content.replace(/<h3 class="text-uppercase">Commercial Photo Shots<\/h3>/g, '<h3 class="text-uppercase">UI/UX Design</h3>');
    content = content.replace(/<h3 class="text-uppercase">Professional Modeling<\/h3>/g, '<h3 class="text-uppercase">IT Consulting</h3>');
    
    // Services description
    content = content.replace(/<p class="mb-4">Lorem ipsum dolor sit amet.+?egestas a tellus.<\/p>/gs, '<p class="mb-4">We build highly scalable solutions using the latest technologies. From landing pages to complex applications, our focus is on high performance and exceptional user experience.</p>');

    // Download Now -> Get a Quote
    content = content.replace(/<a class="btn btn-outline-primary border-2" href="https:\/\/themewagon.com\/themes\/poseify">Download\s+Now<\/a>/g, '<a class="btn btn-outline-primary border-2" href="#Contact">Get a Quote</a>');

    // About section in about.html and index.html
    content = content.replace(/<div class="title-left">\s*<h5>History<\/h5>\s*<h1>About Our Agency<\/h1>\s*<\/div>/g, '<div class="title-left">\\n                                <h5>Our Story</h5>\\n                                <h1>About Our Software House</h1>\\n                            </div>');
    content = content.replace(/<p class="mb-4 wow fadeInUp" data-wow-delay="0.2s">Tempor erat elitr rebum at clita.+?dolore vero eos.<\/p>/gs, '<p class="mb-4 wow fadeInUp" data-wow-delay="0.2s">Orvion is a team of passionate developers and designers dedicated to creating impactful digital experiences. We partner with businesses to transform their ideas into powerful software platforms.</p>');
    
    const oldList = `<ul class="list-group list-group-flush mb-5 wow fadeInUp" data-wow-delay="0.3s">
                            <li class="list-group-item bg-dark text-body border-secondary ps-0">
                                <i class="fa fa-check-circle text-primary me-1"></i> Lorem ipsum dolor sit amet
                                consectetur elit.
                            </li>
                            <li class="list-group-item bg-dark text-body border-secondary ps-0">
                                <i class="fa fa-check-circle text-primary me-1"></i> Donec vehicula, sem ut tempus
                                tempus.
                            </li>
                            <li class="list-group-item bg-dark text-body border-secondary ps-0">
                                <i class="fa fa-check-circle text-primary me-1"></i> Morbi mi dapibus, feugiat nisi non
                                mollis justo.
                            </li>
                        </ul>`;
    const newList = `<ul class="list-group list-group-flush mb-5 wow fadeInUp" data-wow-delay="0.3s">
                            <li class="list-group-item bg-dark text-body border-secondary ps-0">
                                <i class="fa fa-code text-primary me-1"></i> Custom Website & Web App Development
                            </li>
                            <li class="list-group-item bg-dark text-body border-secondary ps-0">
                                <i class="fa fa-mobile-alt text-primary me-1"></i> Native and Cross-Platform Mobile Apps
                            </li>
                            <li class="list-group-item bg-dark text-body border-secondary ps-0">
                                <i class="fa fa-paint-brush text-primary me-1"></i> Professional UI/UX Design services
                            </li>
                        </ul>`;
    
    let escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    content = content.replace(new RegExp(escapeRegExp(oldList), 'g'), newList);

    // Become A Model -> Contact Us
    content = content.replace(/<a href="#!" class="btn btn-outline-primary border-2 py-3 w-100">Become A Model<\/a>/g, '<a href="contact.html" class="btn btn-outline-primary border-2 py-3 w-100">Contact Us</a>');
    content = content.replace(/<a href="#!" class="btn btn-primary py-3 w-100">Schedule Casting<\/a>/g, '<a href="service.html" class="btn btn-primary py-3 w-100">Our Services</a>');

    // Testimonials generic text
    content = content.replace(/<p class="fs-5">Clita clita tempor.+?justo sea clita.<\/p>/gs, '<p class="fs-5">"Orvion transformed our digital presence completely. The new platform is blazing fast, user-friendly, and has supercharged our productivity. Highly recommended!"</p>');

    fs.writeFileSync(file, content);
}
console.log('Migrator 2 done');
