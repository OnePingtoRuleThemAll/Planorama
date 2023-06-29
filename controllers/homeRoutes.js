const router = require('express').Router();
const { Event, User }= require('../models');
const withAuth = require('../utils/auth');

//Get all the projects and JOIN with user data
router.get('/', async (req, res) => {
    try{

    } catch(err) {

    }

});

//Gets a single project depending on the ID
router.get('/project/:id', async (req,res) => {
    try{

    } catch(err) {

    }
});

//Route to access user profile
router.get('profile' ,withAuth, async (req, res) =>{
    try{

    } catch(err){ 

    }

});

