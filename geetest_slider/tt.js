const jsdom = require("jsdom");
const fs = require('fs');
const { JSDOM } = jsdom;
const { createCanvas } = require('canvas');


const html = fs.readFileSync('./index.html', 'utf8');
const dom = new JSDOM(html);
window = dom.window;
