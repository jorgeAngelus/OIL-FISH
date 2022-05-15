const {Router} = require('express')
const router = Router();

router.get('/',(req,res)=>{
    res.send("FISHES OF CHANGE");
})

router.get('/voluntario',(req,res)=>{
    res.render('Voluntario')
})

module.exports = router;