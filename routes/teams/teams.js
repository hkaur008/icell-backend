const express = require('express');
const Teams = require('../../models/teams')
const router = express.Router();

router.get("/", async(req,res) => {

    try{
        const teams = await Teams.find()
        res.json(teams)
    }
  catch(err){res.send('Error'+err);}
});

router.get('/:id', async(req,res) => {

    try{
        const team = await Teams.findById(req.params.id)
        res.json(team)
    }
  catch(err){res.send('Error'+err);}
});


router.post('/',async(req,res)=>{

    const teams = new Teams({
        name: req.body.name,
        email : req.body.email,
        linkedin_url : req.body.linkedin_url,
        instagram_url :req.body.instagram_url, 
        image :req.body.image,
        position_holding :req.body.position_holding,
        phone :req.body.phone 
    })

    try {
        const sampTeam= await teams.save()
        res.json(sampTeam)
    } catch (error) {
        res.send('error :not saved')
    }
})

router.patch('/:id', async(req,res) => {

    try{
        const team = await Teams.findById(req.params.id)
        res.json(team)
    }
  catch(err){res.send('Error'+err);}
});

module.exports=router