/** Faz requisicao do modulo express . */
const express = require('express'); 
const path = require('path');
/** Chama a funcao express para iniciar a aplicacao. */
const app = express();
/**Port  */
const port = 3000;

/** Rota para pagina inicial. */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/home.html'));
})

/** Rota para about */
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/about.html'))
})

/**Rota para login */
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/login.html'))
})

/** Rota para user */
app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/user.html'))
})

app.listen(port, ()=>{
    console.log(`Running at port: ${port}`)
})