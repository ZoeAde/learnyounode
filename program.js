//#1
// console.log('HELLO WORLD');

//#2
// var sum = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   sum += +process.argv[i];
// };

// console.log(sum);

//#3
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// var str = buffer.toString();
// var lines = str.split('\n').length;
// console.log(lines - 1);

//#4
// var fs = require('fs');
// var callback = fs.readFile(process.argv[2], 'utf8', function (error, data) {
//   var split = data.split('\n').length;
//   console.log(split - 1);
// });

//#5
//prints a lift of files in a directory
//filter the files by extension of the files
// var fs = require('fs');
// var callback = fs.readdir(process.argv[2], function(error, list) {
//   for (var i = 0; i < list.length; i++) {
//     if (list[i].indexOf('.md') > -1) {
//       console.log(list[i]);
//     }
//   }
// });

//#6
var module = require('./module.js');
module();


































