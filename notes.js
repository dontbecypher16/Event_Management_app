/* 
admin
   seeding(add to index for access)
   user.find, create
   gensalt

middlewares
   exports
   authentication.js req, res, next
   check for token
   decode token


add authentcation to routes
add role to controllers



const axios = require('axios');

//Test object to represent what is pulled from DB
/*
var testObj = {
 "title": "Weekend Meet-up",
 "cost": 24,
 "category": "casual",
 "getImgURL":"https://imagegen.herokuapp.com/?category=casual"
}


async function anonImage (obj) {
   let imgURL = await axios({
    method: 'get',
    url: obj.getImgURL,
    responseType: 'json'
   })
    .then((response) => {
      return response.data.image;
    });
   obj['imgURL'] = imgURL;
   return obj
  }
  
  //Test run of fucntion
  //anonImage(testObj).then((response) => console.log(response));
  
  module.exports = {
   anonImage
  }
  
  //This is how it will look when you call it in another file
  
  anonImage(testObj)
   .then((response) => {
    //Do stuff here
   });
   */
   
   
    /* const axios = require("axios");
  const url = "https://my-json-server.typicode.com/edurekaDemo/noderequest/db";
  const getData = async url => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getData(url);



*/