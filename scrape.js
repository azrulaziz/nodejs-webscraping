const request = require('request');
const cheerio = require('cheerio');

request('https://nosidebar.com/simple-living-blogs/', (error, response, html) => {
    if(!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        // const blogTitle = $('.blog-title');
        // const output = blogTitle.find('h1').parent().text();
        // console.log(output);
        $('.menu-item a').each((i, el) => {
            const item = $(el).text();

            console.log(item);
        })
    }
});