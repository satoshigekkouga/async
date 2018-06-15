const fs = require('fs');

function makeThunk(fn){
  let args = [].splice.call(arguments,1);
  return function(a){
    args.push(a);
    fn.apply(null,args);
  }
}


//  from the callback file
let datas = [];
let position = -1;
function conditions(current){
  if(position === (current - 1)){
    print(current);
  }
}
function print(x){
  if(!datas[x]){
    return;
  }
  console.log(x);
  position = x;
  print(x+1);
}
//  the end

one = makeThunk(fs.readFile,'data1.txt','utf8');
two = makeThunk(fs.readFile,'data2.txt','utf8');
three = makeThunk(fs.readFile,'data3.txt','utf8');

one((err,data) => {
  datas[0] = data;
  conditions(0);
});

two((err,data) => {
  datas[1] = data;
  conditions(1);
});

three((err,data) => {
  datas[2] = data;
  conditions(2);
});
