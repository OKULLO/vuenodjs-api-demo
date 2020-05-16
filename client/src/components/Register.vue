<template>

 <v-layout cloumn>
 <v-flex xs6 offset-xs3>
 <div class="white elevation-2">
 <v-tool-bar flat dense class="cyan" dark>
 <v-tool-bar-title>Register</v-tool-bar-title>
 </v-tool-bar>
  <div class="pl-4 pr-4 pt-2 pb-2">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username" v-model="username">
              
            
      
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email" v-model="email">
        
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="password">
            
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="confirmPass" placeholder="repeat password">
            
            <v-btn class="cyan" @click="Register">Register</button>
 </div>

 </v-flex>
 </v-layout>
</template>

<script>
import authentication from '../services/authenticate'
export default {
      name: 'Register',
      data(){
        return{
          username:'',
          email:'',
        password:'',
        confirmPass:'',
        error:null
        }
      },
      methods:{
       async Register(){
        try{
           await authentication.Register({
             username:this.username,
             email:this.email,
             password:this.password,
             password_repeat:this.confirmPass
           })
           }
           catch(error){
            this.error =error.response.data.e
           }
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
