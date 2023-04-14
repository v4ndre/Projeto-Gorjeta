
function calculate(){
    const porcentagem = (document.querySelector('#porcentagem').value)/100
    const pessoas = (document.querySelector('#pessoas').value)
    const total = (document.querySelector('#valor').value)
    

    if (!total || !pessoas || !porcentagem) {
        alert('Campos Vazios.')
    } else {
        const gorjeta = (total * porcentagem) / pessoas

        const valorGorjeta = document.querySelector('#valorGorjeta')
        valorGorjeta.innerText = 'R$: ' + gorjeta.toFixed(2) + ' por pessoa.'
        

    }

}



