//Modules
var http = require('http');
var request = require('request');

const microServicoBD = require('./microServicoBancoDeDados');
const microServicoClientes = require('./microServicoListagemDeClientes');
const microServicoPagamentos = require('./microServicoProcessamentoDePagamento');

var requestMicroServico = 'nao executado';

function iniciaSistemaCiaTransporte(){
    return "Sistema de transporte iniciado.";
}

function acionaModuloReserva(){
    return "Modulo de reserva";
}

function acionaModuloVenda(){
    return "Moodulo de venda";
}

function acionaModuloGestaoDeAssentos(){
    return "Modulo de gestão de assentos";
}

function acionaModuloProgramaDeMilhagens(){
    return "Modulo programa de milhagens";
}

function acionaModuloGerenciamentoDeClientes(){
    return "Modulo gerenciamento de clientes";
}

function acionaModuloPagamento(){
    return "Modulo de pagamentos";
}

function acionaModuloAntiFraude(){
    return "Modulo anti-fraude";
}

http.createServer(function(req,res) {

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    if (req.url === '/') {
        var executando = `--> ${iniciaSistemaCiaTransporte()}\n
                      --> ${acionaModuloReserva()}\n
                      --> ${acionaModuloVenda()}\n
                      --> ${acionaModuloGestaoDeAssentos()}\n
                      --> ${acionaModuloProgramaDeMilhagens()}\n
                      --> ${acionaModuloGerenciamentoDeClientes()}\n
                      --> ${acionaModuloPagamento()}\n
                      --> ${acionaMicroServicos()}\n
        `
        res.end(executando)
        return
    } else if(req.url === '/bd'){
        res.end(`${microServicoBD()}`)
        return
    } else if(req.url === '/clientes'){
        res.end(`${microServicoClientes()}`)
        return
    } else if(req.url === '/pagamento'){
        res.end(`${microServicoPagamentos()}`)
        return
    }

    res.end(
            `<h1>Oops!</h1>
            <p>We can't seem to find the page your are looking for</p>`)
    }).listen(8080);

function acionaMicroServicos(){
    request('http://localhost:8080', function(error, response, body){
        if(!error && response.statusCode === 200){
            requestMicroServico = body;
            console.log(body)
        }
    })
    return requestMicroServico;
}