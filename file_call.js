const fs  = require('fs');

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


fs.readFile('data1.txt','utf8',(err,data) => {
  datas[0] = data;
  conditions(0);
});
fs.readFile('data2.txt','utf8',(err,data) => {
  datas[1] = data;
  conditions(1);
});
fs.readFile('data3.txt','utf8',(err,data) => {
  datas[2] = data;
  conditions(2);
})
