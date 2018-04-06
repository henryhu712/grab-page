/**
 *
 * Author: Henry Hu
 *
 */
var system = require("system");
if (system.args[0] === undefined || system.args[1] === undefined) {
  console.log('Error');
  console.log('Usage: $ ./phantomjs grabpage.js "http://www.example.com"');
  phantom.exit();
}

var url = system.args[1],
    resources = [],
    width = 400,
    height = 300;
var page1 = require('webpage').create();
var page2 = require('webpage').create();

page1.viewportSize = { width:width, height:height }
page1.open(url, function(stat) {

  if (stat == 'success') {
    // https://stackoverflow.com/questions/31245553/how-to-get-the-height-of-a-full-html-page-in-phantomjs-javascript
    // https://stackoverflow.com/a/31248055/3054511
    var realHeight = page1.evaluate(function(){
        return document.body.offsetHeight
    });

    page2.viewportSize = { width:width, height:realHeight }
    page2.open(url, function(stat) {
      // Set 5 seconds delay to load dynamic content
      setTimeout(function() {
        page2.render('page.png');
        phantom.exit();
      }, 5000);
    });

  }
});

