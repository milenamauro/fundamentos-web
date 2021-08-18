/*
Case Sensitive = reconhece letras maiusculas e minusculas. Faz diferença o uso.
por Tag: getElementByName()
por Id: getElementById()
por Nome: getElmentsByName()
por Classe: getElementsByClasseName()
por Seletor: querySelector() - consegue selecionar então mais usada
*/


let nome = window.document.getElementById('nome')   //pegue o elemento pelo id
let email = document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 2) {
        txtNome.innerHTML= 'Nome Inválido'
        txtNomestyle.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}
function validaEmail(){
    let txtEmail =  document.querySelector('#txtemail')

    if (email.value.indexOf('@')==-1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color='red'
    } else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color='green'
        emailOk = true
    }
} 
function validaAssunto (){
        let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande BB, dgite no máximo 100 caracteres'
        txtAssunto.style.color ='red'
        txtAssunto.style.display = 'block'
                
            } else{
                txtAssunto.style.display = 'none'
                assuntoOk = true
            
            }    

    }
    function enviar (){
        if (nomeOk == true && emailOk == true && assuntoOk == true){
            alert ('Formulário enviado com sucesso')
        } else {
    alert ('Preencha o formulário corretamente before you go viu')
        }
    
    }

    function mapaZoom(){
mapa.style.width ='800px'
mapa.style.leight= '600px'

}

    function mapaNormal(){
mapa.style.width ='400px'
mapa.style.leight= '250px'

}
