const axios = require('axios');


async function anonImage (obj) {
    let imgURL = await axios({
     method: 'get',
     url: obj.img,
     responseType: 'json'
    })
     .then((response) => {
       return response.data.image;
     });
    obj['img'] = imgURL;
    return obj
   }
   
   module.exports = anonImage
   






