const app = require('./app');
const port = 3000

/*app.get('/',(req,res) => {
    res.send('OIL FISH')
})*/

/*app.listen(port,()=>{
    console.log(`escucha por el puerto ${port}`)
})*/

async function main(){
    await app.listen(app.get('port'));
    console.log("server port", app.get('port'));
}

main();