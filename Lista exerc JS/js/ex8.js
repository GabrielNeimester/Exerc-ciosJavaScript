const num = prompt('Digite um numero')
let fatorial = 1
for(let i = 1; i <= num; i++){
    fatorial = fatorial * i
}
document.write( num + "! = "+ fatorial)