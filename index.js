/** Faz requisicao do modulo express . */
const express = require('express'); 
const path = require('path');
/** Chama a funcao express para iniciar a aplicacao. */
const app = express();
/**Port  */
const port = 3000;

/** Bootstrap files */
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

/* Import todos os arquivos statics*/
app.use(express.static('./public'))


/** Rota para pagina inicial. */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'));
    
})
/** Rota para pagina index. */
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'));    
})

/** Rota para about */
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/about.html'));
})

/**Rota para login */
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/login.html'));
})

/** Rota para user */
app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/user.html'));
})

/** Erro 404 */
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/pages/404.html'));
})


app.listen(port, ()=>{
    console.log(`Runnning at port: ${port}`);
})