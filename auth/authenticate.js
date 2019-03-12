const axios = require("axios");

module.exports = async (email,password) => {
   const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
   return data.find(user => {
      if(user.email === email && user.website === password){
         return user;
      }
   })
}
