# Desafio 10 - Operadores de Comparação
**Enunciado:** Pesquise a diferença entre == e ===, e entre != e !==, e o que é coerção de tipos em JavaScript. Pesquise também como o JavaScript compara duas strings com > e <.
## Coerção de Tipos
Trata-se de um conceito em linguagens de programação que consiste na interação forçada de valores de diferentes tipos. Esse processo pode acontecer de forma implícita (automática) e explícita (conversão de tipos manual utilizando "Number()" ou "String()" antes de comparar os valores com os operadores, por exemplo).
### Operadores sem Coerção de Tipo
Esse tipo de operador não realiza qualquer coerção de tipo da variável. Dessa forma, se os valores possuírem tipos diferentes, os operadores vão considerar esse fator para validar uma condição. A única forma de coerção de tipo aplicável, a explícita (manual), deve ser feita antes dos valores serem avaliados pelos operadores. São eles:
- **Estritamente igual (`===`):** Avalia se o valor **e** o tipo da variável são iguais entre as operações ou valores. Se houver qualquer diferença em tipo ou valor, a condição resulta em `false`.
- **Não é estritamente igual (`!==`):** Avalia se o valor **ou** o tipo da variável é diferente entre as operações ou valores. Se ambos possuírem igualdade em valor e tipo, a condição resulta em `false`.
### Operadores com Coerção de Tipo
Esse tipo de operador realiza uma coerção de tipo implícita (automática), fazendo com que ambos os valores comparados sejam convertidos para um tipo em comum. Dessa forma, os operadores não precisam avaliar se os valores possuem tipos diferentes, pois já possuem tipos compatíveis. São eles:
- **Igual a (`==`):** Se ambos os valores ou operações forem iguais, a condição resulta em `true`.
- **Diferente (`!=`):** Se ambos os valores ou operações forem diferentes, a condição resulta em `true`.
- **Maior que (`>`):** Se o primeiro valor ou operação for maior que o segundo, a condição resulta em `true`.
- **Maior que ou igual a (`>=`):** Se o primeiro valor ou operação for maior ou igual ao segundo, a condição resulta em `true`.
- **Menor que (`<`):** Se o primeiro valor ou operação for menor do que o segundo, a condição resulta em `true`.
- **Menor que ou igual a (`<=`):** Se o primeiro valor ou operação for menor ou igual ao segundo, a condição resulta em `true`.
## Comparação de Strings com os Operadores `>` e `<`
Todos os operadores, incluindo os anteriores, baseiam-se em uma tabela de caracteres denominada de Unicode, que ordena a maioria dos caracteres utilizados na computação moderna em posições. Com `strings` não é diferente, pois tanto letras quanto números e símbolos estão incluídos na tabela e podem ser incluídos nesse tipo de variável. Com isso, ao utilizar os operadores `>` e `<`, será avaliado se a posição de um caractere é maior ou menor em relação ao outro. Por se tratar de muitos caracteres existentes na tabela, é impossível decorar a ordem de cada um, mas é possível ter uma regra como base:
> letras com acentuação ou notação > letras minúsculas > letras maiúsculas > números

E essa regra de letras minúsculas terem maior posição do que as letras maiúsculas, também se repete nas letras com acentuação ou notação:

> letras **minúsculas** com acentuação ou notação > letras **maiúsculas** com acentuação ou notação

Dessa forma, pode-se avaliar qual será o resultado de uma comparação de strings com os operadores `>` e `<` no terminal. A comparação sempre começa pelo primeiro caractere de cada `string`, mas se ambos forem iguais então o próximo caractere de cada `string`é avaliado, e assim sucessivamente para definir a `string` maior ou menor. O exemplo a seguir mostra essa comparação com o operador `>`:
```javascript
console.log("Hello" > "World") // Resultado: false, pois "H" < "W"
console.log("hello" > "World") // Resultado: true, pois "h" > "W"
console.log("h3llo" > "hello") // Resultado: false, pois "3" < "e"
console.log("wÓrld" > "world") // Resultado: true, pois "Ó" > "o"
```
