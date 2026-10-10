// -- COMPARAÇÕES DO ENUNCIADO DO DESAFIO

console.log(5 == "5"); // Resultado: true
console.log(5 === "5"); // Resultado: false
console.log(0 == false); // Resultado: true
console.log(null == undefined); // Resultado: true -> null e undefined são a mesma coisa implicitamente
console.log(null === undefined); // Resultado: false -> null é do tipo Null e undefined do tipo Undefined, logo são estritamente diferentes
// Nota: null retorna como tipo Object ao usar typeof por causa de um erro histórico, mas na especificação oficial ele é tipo Null
console.log("10" > "9"); // Resultado: false
console.log(10 > "9"); // Resultado: true
console.log("a" < "b"); // Resultado: true



// Array para coletar a informação digitada em cada repetição sem sobrescrever o da repetição anterior
let my_var = [];

// -- COLETA DE VALORES

// Repete até o 2º valor
for (let i = 1; i < 3; i++) {

    // Abre uma caixa de pergunta com os botões "OK"(true) e "Cancelar"(false)
    let var_type = confirm(`O ${i}º valor será um número?\nSe sim, clique em OK.`)

    // Se clicado em "OK"
    if (var_type === true) {
        // Converte para número
        my_var[i-1] = Number(prompt(`Digite o ${i}º valor: `));
    }
    // Se clicado em "Cancelar"
    else {
        // Não converte para número, mantendo string
        my_var[i-1] = prompt(`Digite o ${i}º valor: `);
    }
}

// -- COMPARAÇÃO DOS VALORES

let broadly_equal;
let strictly_equal;

// Iguais em valor
if (my_var[0] == my_var[1]) {
    broadly_equal = "Sim";
}
else {
    broadly_equal = "Não";
}

// Iguais em valor e tipo
if (my_var[0] === my_var[1]) {
    strictly_equal = "Sim";
}
else {
    strictly_equal = "Não";
}

// -- SAÍDA FINAL

alert(`-------------- STATUS --------------
1º valor: ${my_var[0]}.
2º valor: ${my_var[1]}.

Iguais em valor: ${broadly_equal}.
Iguais em valor e tipo: ${strictly_equal}.
`);