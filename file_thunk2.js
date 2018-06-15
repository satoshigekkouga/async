const fs = require('fs');

function makeActiveThunks(fn){
    let args = [].splice.call(arguments,1);
    let info,cb;
    function A(err,data){
      if(cb) cb(data);
      else info = data;
    }
    args.push(A);
    fn.apply(null,args);

    return function(call){
      if(info)  call(info);
      else cb = call;
    }
}

one = makeActiveThunks(fs.readFile,'data1.txt','utf8');
two = makeActiveThunks(fs.readFile,'data1.txt','utf8');
three = makeActiveThunks(fs.readFile,'data1.txt','utf8');

one(function(data){
  console.log(1);
  two(function(data){
    console.log(2);
    three(function(data){
      console.log(3);
    });
  });
});
