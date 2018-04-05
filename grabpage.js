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
    width = 375,
    height = 8000;

var page = require('webpage').create();
page.viewportSize = { width: width, height: height }

page.open(url, function(stat) {
  if (stat == 'success') {
    setTimeout(function() {
      page.render('page.png');
      phantom.exit();
    }, 4000);
  }
});

