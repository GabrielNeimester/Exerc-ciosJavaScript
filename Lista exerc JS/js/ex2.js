function calcular(){
    quantidade = document.getElementById('quantidade').value
    if(quantidade<=0){
        alert('Por favor digite uma quantidade válida!!')
    }
    else if(quantidade < 12){
        valorcompra = 1.30 * quantidade
    }
    else if (quantidade >= 12)(
        valorcompra = 1.00 * quantidade
    )
    document.getElementById('result').innerText = "O valor da compra das maçãs é " + valorcompra.toFixed(2) + " reais"
}