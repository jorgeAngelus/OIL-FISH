const app = require('./app');

const port = 3000

app.get('/',(req,res) => {
    res.send('OIL FISH')
})

/*app.listen(port,()=>{
    console.log(`escucha por el puerto ${port}`)
})*/

async function main(){
    await app.listen(3000);
    console.log("Escucha por el puerto 3000");
}

main();