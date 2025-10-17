function verificacão(){
    const resultado = document.getElementById("resultado");
    const input = document.getElementById("comida");
    
    const valor = input.value.trim().toLowerCase();


    if (valor === "pão com ovo"){
            resultado.textContent = "café da manhã";
    }
     else if (valor === "feijão com arroz"){
            resultado.textContent = "almoço";
    }
    else{
            resultado.textContent = "jantar";
 }
}

function repetição(){
    let pTexto = document.getElementById("paragrafo2")
    for (let i = 0; i < 5; i++){
        pTexto.innerHTML = pTexto.innerHTML + "<br>" + i;
    }

let novoParagrafo = document.getElementById("paragrafo3")
let lista = ["arroz", "salada", "picanha"]
for (let index = 0; index < lista.length; index++){
    const element = lista[index];
    novoParagrafo.innerHTML = novoParagrafo.innerHTML + "<br>" + element; 
    }
}
