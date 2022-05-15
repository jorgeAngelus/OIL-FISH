const path = require('path');
const {Router} = require('express');
const { append } = require('express/lib/response');
const router = Router();


const voluntarios=[];

/*router.get('/',(req,res)=>{
    res.sendFile('index.html',{root: public});
})*/

router.get("/",(req,res)=>{
    res.sendFile(__dirname)
})

/*router.get('/voluntario.html',(req,res)=>{
    res.render('voluntario');
})*/

router.post('/voluntario.html',(req,res)=>{
    //voluntarios.push(req.body)
    console.log(req.body);
    res.send('Recibido'); 
})

module.exports = router;