var fs = require('fs');
var callback = fs.readFile(process.argv[2], 'utf8', function (error, data) {
  var split = data.split('\n').length;
  console.log(split - 1);
});

var fs = require('fs');
var callback = fs.readdir(process.argv[2], function(error, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].indexOf('.md') > -1) {
      console.log(list[i]);
    }
  }
});

