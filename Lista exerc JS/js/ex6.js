let massa = prompt("Digite a massa do Material:")
let tempo = 0

while(massa >= 0.10){
    massa = massa * 0.75
    tempo = tempo + 30
}

document.write("A partir de " + tempo + " segundos a massa do material começará a se tornar inferior a 0.10")