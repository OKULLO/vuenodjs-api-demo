const { Sequelize, Model, DataTypes } = require('sequelize');
const{ sequelize } = require('./dbConfig');


//user model
class User extends Model{}
      User.init({
          username:DataTypes.STRING,
          email: {
              type:Sequelize.STRING,
               unique:true
          },
          password:{
              type:Sequelize.STRING,
              validate:{
                  min:8
              }
          }
      },{ sequelize, modelName: 'user'})





  
       
module.exports = {
    User,
   
}
