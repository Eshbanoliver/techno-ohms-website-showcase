const fs = require('fs');

const html = fs.readFileSync('live_about.html', 'utf-8');
let out = '';

out += "--- CSS ---\n";
const cssRegex = /<link[^>]+href="([^"]+)"[^>]*>/gi;
let match;
while ((match = cssRegex.exec(html)) !== null) {
    if (html.substring(match.index, match.index + match[0].length).includes('stylesheet')) {
        out += match[1] + "\n";
    }
}

out += "\n--- JS ---\n";
const jsRegex = /<script[^>]+src="([^"]+)"[^>]*>/gi;
while ((match = jsRegex.exec(html)) !== null) {
    out += match[1] + "\n";
}
fs.writeFileSync('assets.txt', out, 'utf-8');
