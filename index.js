const axios = require('axios');
const fs = require('fs');

function wrapper1(userId){
  axios.get(`https://catappapi.herokuapp.com/users/${userId}`)
   .then(response => {Promise.all(response.data.cats)
     .then(values => {values.forEach(value =>
       {axios.get(`https://catappapi.herokuapp.com/cats/${value}`)
        .then(response => console.log(response.data.name))
     }
     )})
   })
   .catch(err => console.log(err))

 }

async function wrapper2(userId){
  let response = await axios.get(`https://catappapi.herokuapp.com/users/${userId}`);
  let cats = response.data.cats;
  cats.forEach(async catId => {
    let res = await axios.get(`https://catappapi.herokuapp.com/cats/${catId}`);
    console.log(res.data.name);
  });
}


async function wrapper3(userId){
  let response = await axios.get(`https://catappapi.herokuapp.com/users/${userId}`);
  let cats = response.data.cats;
  return await Promise.all(cats.map(async (catId) => {
    let res = await axios.get(`https://catappapi.herokuapp.com/cats/${catId}`);
    return res.data.name;
  }));
}

wrapper3(123).then(cats => {console.log(cats)});
