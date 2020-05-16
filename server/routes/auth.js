const express = require('express');

const router = express.Router();

const { User} = require('../models/api')




router
  .route('/register')
     .post(async(res,req)=>{
     	try{
     		const user =await User.findOne({
     			where:{
     				email:req.params.email
     			}
     		})
     		if(!user){
     			await User.create({
     				username:req.body.username,
     				email:req.body.email,
     				password:req.body.password
     			})
     			return res.status(201).json({
     				success:true,
     				msg:'user registered'
     			})
     		}
               return res.status(400).json({
                         success:false,
                         error:'email is already in use'
                    })

     	}
     	catch(e){
     		return res.send({
     			success:false,
     			error:e
     		})

     	}
     })



module.exports = router;

