const request = require('request');
const cheerio = require('cheerio');

const url = 'http://www.melon.com/chart/';
request(url, function(error, response, html) {
  if (error) throw error;


  const $ = cheerio.load(html);
  let rankCount = 0;
  const rankElements = $('div.rank01');
  rankElements.each(function() {
    rankCount = rankCount + 1;
    const rankTitle = $(this).find("a").text();
    console.log(rankCount, rankTitle);
  });
});
