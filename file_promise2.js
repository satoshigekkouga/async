const fs = require('fs');

function createPromise(fileName){
  return new Promise((res,rej) => {
    fs.readFile(fileName,'utf8',(err,data) => {
      if(err) rej(err);
      else res(data);
    });
  });
}

files = ['data1.txt','data2.txt','data3.txt'];

promises = files.map(file => createPromise(file));
promises.reduce((lastPromise,promise) => {
  return lastPromise
    .then(() => promise)
    .then(value => console.log(value));
},new Promise((res,rej) => {res()}))
.then(() => console.log('finished')); 
