const path = require('path');
const {Router} = require('express')
const router = Router();


const voluntarios=[];

router.get('/',(req,res)=>{
    res.sendFile('voluntario.html',{root: v})
})

router.get('/voluntario',(req,res)=>{
    res.render('voluntario');
})

router.post('/voluntario',(req,res)=>{
    voluntarios.push(req.body)
    console.log(req.body);
    res.send('Recibido') 
})

module.exports = router;