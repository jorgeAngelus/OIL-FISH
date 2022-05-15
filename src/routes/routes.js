const fs = require('fs')
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
    const {Name,Apellido,Email,Phone,Birthday} = req.body;
    if(!Name || !Apellido || !Email || !Phone || !Birthday){
        res.status(400).send('No debe haber campos vacios')
        return;
    }
    let newvoluntario = {
        Name,
        Apellido,
        Email,
        Phone,
        Birthday
    }    
    voluntarios.push(newvoluntario);


    console.log(voluntarios);
    res.send('Recibido'); 

})

module.exports = router;