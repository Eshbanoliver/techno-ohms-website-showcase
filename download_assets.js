const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = "https://psptechno.com/";

const assets = [
    "css/bootstrap.css",
    "css/font-awesome.css",
    "css/flaticon.css",
    "css/animate.css",
    "css/owl.css",
    "css/jquery.fancybox.css",
    "css/hover.css",
    "css/style-5.css",
    "css/colors/pink-5.css",
    "css/revolution/settings.css",
    "css/revolution/layers.css",
    "css/revolution/navigation.css",
    "css/responsive.css",
    "js/respond.js",
    "js/jquery-1.12.4.min.js",
    "js/bootstrap.min.js",
    "js/jquery.fancybox.pack.js",
    "js/jquery.fancybox-media.js",
    "js/owl.js",
    "js/jquery.appear.js",
    "js/jquery.countTo.js",
    "js/isotope.js",
    "js/validate.js",
    "js/switcher.js",
    "js/revolution/jquery.themepunch.tools.min.js",
    "js/revolution/jquery.themepunch.revolution.min.js",
    "js/revolution/extensions/revolution.extension.actions.min.js",
    "js/revolution/extensions/revolution.extension.carousel.min.js",
    "js/revolution/extensions/revolution.extension.kenburn.min.js",
    "js/revolution/extensions/revolution.extension.layeranimation.min.js",
    "js/revolution/extensions/revolution.extension.migration.min.js",
    "js/revolution/extensions/revolution.extension.navigation.min.js",
    "js/revolution/extensions/revolution.extension.parallax.min.js",
    "js/revolution/extensions/revolution.extension.slideanims.min.js",
    "js/revolution/extensions/revolution.extension.video.min.js",
    "js/script.js"
];

function downloadFile(url, targetFile) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (status code: ${response.statusCode})`));
                return;
            }

            const dir = path.dirname(targetFile);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            const file = fs.createWriteStream(targetFile);
            response.pipe(file);

            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(targetFile, () => { }); // Delete the file async
            reject(err);
        });
    });
}

(async () => {
    for (const asset of assets) {
        try {
            console.log(`Downloading ${baseUrl + asset} to ${asset}...`);
            await downloadFile(baseUrl + asset, asset);
            console.log(`Success: ${asset}`);
        } catch (e) {
            console.error(`Error downloading ${asset}: ${e.message}`);
        }
    }
})();
