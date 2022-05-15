const fs = require('fs')
const path = require('path');
const {Router} = require('express');
const { append } = require('express/lib/response');
const router = Router();

const json_voluntarios = fs.readFileSync('src/Voluntarios.json','utf-8')
const voluntarios = JSON.parse(json_voluntarios);

router.get("/",(req,res)=>{
    res.sendFile(__dirname)
})

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

    const json_voluntarios = JSON.stringify(voluntarios);
    fs.writeFileSync('src/Voluntarios.json',json_voluntarios,'utf-8');

    console.log(voluntarios);
    res.send('Recibido'); 

})

module.exports = router;