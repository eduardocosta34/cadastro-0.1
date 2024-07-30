let cadastro = [{
    nome: '',
    idade: ''
}]

cadastro.shift()


function adicionarLista (n, i){
    cadastro.push({nome: n, idade: i})
}

function capturarValores() {
    const nomePessoa = document.getElementById('campoNome').value;
    const idadePessoa = document.getElementById('campoIdade').value;

    let lista = document.getElementById('mostraNome');
    lista.innerHTML = lista.innerHTML + `<br>Nome: ${nomePessoa} - Idade: ${idadePessoa}`

   adicionarLista(nomePessoa, idadePessoa);

    document.getElementById('campoNome').value = ''
    document.getElementById('campoIdade').value = ''
}

function limpar(){
    lista = document.getElementById('mostraNome').innerHTML = '';
}

console.log(cadastro);






// let cadastro = [{
//     nome: '',
//     idade: ''
// }]

// cadastro.shift()


// function capturarValores() {
//     const nomePessoa = document.getElementById('campoNome').value;
//     const idadePessoa = document.getElementById('campoIdade').value;

//     let lista = document.getElementById('mostraNome');

//     lista.innerHTML = lista.innerHTML + `<br>Nome: ${nomePessoa} - Idade: ${idadePessoa}`

    
//     cadastro.push({nome: nomePessoa, idade: idadePessoa})

//     document.getElementById('campoNome').value = ''
//     document.getElementById('campoIdade').value = ''

// }

// function limpar(){

//     lista = document.getElementById('mostraNome').innerHTML = '';

// }