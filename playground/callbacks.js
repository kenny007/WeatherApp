var getUser = (id, callback) => {
 var user = {
     id:id,
     name:'Kenny'
 };
 callback(user);
};

getUser(31, (userObject) => {
 console.log(userObject);
})