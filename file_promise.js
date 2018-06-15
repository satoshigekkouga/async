const fs = require('fs');

function createPromise(fileName){
  return new Promise((res,rej) => {
      fs.readFile(fileName,'utf8',function(err,data){
        if(err) rej(err);
        else res(data);
      });
  });
}

function callNext(next){
  next.then
}

one = createPromise('data1.txt');
two = createPromise('data2.txt');
three = createPromise('data3.txt');

one
  .then((value) => {console.log(1);})
  .then((value) => two)
  .then((value) => {console.log(2);})
  .then((value) => three)
  .then((value) => {console.log(3);});
