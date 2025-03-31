function converter() {
    let real = document.getElementById('RS')
    let res = document.getElementById('resutado')

    real = Number(real.value)
    dolar = 5.75

    valor = real * dolar
    

    res.innerHTML = `De acordo com o atual valor do Dolar(US$), o valor fornecido é <strong>${valor}</strong>`
}