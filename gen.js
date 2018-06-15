function* gen(){
  yield asyncTask(1);
  yield asyncTask(2);
  yield asyncTask(3);
}

function asyncTask(value){
  setTimeout((value) => {
    console.log(value);
    iter.next();
  },1000,value);
}

let iter = gen();
iter.next();
console.log(4);
