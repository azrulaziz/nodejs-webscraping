const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const writeStream = fs.createWriteStream('post.csv');

// Write Headers
writeStream.write(`Title,Link,Date \n`);

request('https://nosidebar.com/articles/', (error, response, html) => {
    if(!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        $('.entry-header').each((i, el) => {
            const title = $(el).find('.entry-title').text();
            const link = $(el).find('.entry-title-link').attr('href');
            const date = $(el).find('.entry-time').text().replace(/,/, '');

            // Write row to CSV
            writeStream.write(`${title}, ${link}, ${date} \n`);
        })

        console.log('Scraping done');
    }
});