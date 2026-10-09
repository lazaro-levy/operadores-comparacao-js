# Desafio 10 - Operadores de Comparação
**Enunciado:** Pesquise a diferença entre == e ===, e entre != e !==, e o que é coerção de tipos em JavaScript. Pesquise também como o JavaScript compara duas strings com > e <.
## Operadores que validam por tipo e valor
Esse tipo de operador considera o tipo da variável e o seu valor para validar uma condição, as duas existentes são:
- **Estritamente igual (`===`):** Avalia se o **valor e o tipo da variável são iguais** entre as operações ou valores. Se houver qualquer diferença em tipo ou valor, a condição resulta em `false`.
- **Não é estritamente igual (`!==`):** Avalia se o **valor ou o tipo da variável possuem diferença** entre as operações ou valores. Se ambos possuírem igualdade em valor e tipo, a condição resulta em `false`.
## Operadores que validam por valor
Esse tipo de operador considera apenas o valor da variável para validar uma condição, as seis existentes são:
- **Igual a (`==`):** Se ambos os valores ou operações forem iguais, independente do tipo da variável, a condição resulta em `true`.
- **Diferente (`!=`):** Se ambos os valores ou operações forem diferentes, independente do tipo da variável, a condição resulta em `true`.
- **Maior que (`>`):** Se o primeiro valor ou operação for maior que o segundo, a condição resulta em `true`.
- **Maior que ou igual a (`>=`):** Se o primeiro valor ou operação for maior ou igual ao segundo, a condição resulta em `true`.
- **Menor que (`<`):** Se o primeiro valor ou operação for menor do que o segundo, a condição resulta em `true`.
- **Menor que ou igual a (`<=`):** Se o primeiro valor ou operação for menor ou igual ao segundo, a condição resulta em `true`.
