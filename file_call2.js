const fs = require('fs');

a = fs.readFile;

datas = {};

function order(num,data){
    datas[num] = data;
    filenames = ['one','two','three'];
    for(let i =0; i<filenames.length;i++){
      if(filenames[i] in datas){
        if(datas[filenames[i]]){
          console.log(datas[filenames[i]]);
          datas[filenames[i]] = false;
        }
      }
      else{
        return;
      }
    }
    console.log('finished');
}

// a('data1.txt','utf8',function(err,data){
//   console.log(1);
//   a('data2.txt','utf8',function(err,data){
//     console.log(2);
//     a('data3.txt','utf8',function(err,data){
//       console.log(3);
//     })
//   })
// });

a('data1.txt','utf8',function(err,data){
  order('one',data);
});
a('data2.txt','utf8',function(err,data){
  order('two',data);
});
a('data3.txt','utf8',function(err,data){
  order('three',data);
});
