const valores = prompt('digite o numero de alunos na classe:')
let soma = 0
notas = []
for(let i = 1; i <= valores; i++){
    notas[i] = prompt("Digite a nota do aluno " + i)
    soma += parseFloat(notas[i])
}

media = soma/valores
document.write('A media da classe é ' + media)
