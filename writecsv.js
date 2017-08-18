var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('my.csv');
csv.
   write([
   	["a1","b1"],
   	["b2","c2"],
   	["c2","d2"],
   	], {headers:true}
   	)
   .pipe(ws);