const fs = require('fs');

function createPromise(fileName){
  return new Promise((res,rej) => {
    fs.readFile(fileName,'utf8',(err,data) => {
      if(err) rej(err);
      else res(data);
    });
  });
}


function* final(){
  let one = createPromise('data1.txt');
  let two = createPromise('data2.txt');
  let three = createPromise('data3.txt');

  let x = yield one.then((value) => {iter.next(value)});
  console.log(x);
  let y = yield two.then((value) => {iter.next(value)});
  console.log(y);
  let z = yield three.then((value) => {iter.next(value)});
  console.log(z);

}

async function finalAsync(){
  let one = createPromise('data1.txt');
  let two = createPromise('data2.txt');
  let three = createPromise('data3.txt');

  let x = await one;
  console.log(x);
  let y = await two;
  console.log(y);
  let z = await three;
  console.log(z);

}

// finalAsync();

let iter = final();
iter.next();
