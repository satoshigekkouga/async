const fs = require('fs');

fs.readFile('data1.txt','utf8',(err,data) => {
  console.log(0);
});

fs.readFile('data2.txt','utf8',(err,data) => {
  console.log(1);
});

fs.readFile('data3.txt','utf8',(err,data) => {
  console.log(2);
});
