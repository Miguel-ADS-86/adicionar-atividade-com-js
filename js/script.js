//VARIAVEIS
let atividade = document.getElementById("atividade");
let botao = document.getElementById("btn");
let ul_tabela = document.querySelector(".ul-tabela");
let listaAtividades = [];

// FUNÇÕES
function adicionar(){
    listaAtividades.push(atividade.value);
    exibir();
}
/*podemos usar a crase para atribuir valores usando ${}, e colocar valores hml também*/
function exibir(){
   let novaLista ='';
   
   listaAtividades.forEach(at =>{
     novaLista += `
        <li class="li-tabela">${at.toLocaleUpperCase()}</li>
     `
   })
   limpar();
   ul_tabela.innerHTML = novaLista;
}

function limpar(){
    atividade.value = '';
}

/////////////////////////////////

/* o addEventListener ele escuta qual evento e chama a função.*/
botao.addEventListener('click',adicionar);

