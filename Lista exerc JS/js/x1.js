function calcularreajuste(){
    reajuste = document.getElementById('reajuste').value
    salatual = document.getElementById('atual').value
    salfinal = ((reajuste/100)+1)*salatual
    document.getElementById('result').innerText = "O salario final é de " + salfinal.toFixed(2) + " reais"
}