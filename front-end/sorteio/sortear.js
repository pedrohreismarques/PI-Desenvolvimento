function sortear() {

    const display = document.getElementById('display-container'); 
    
    let contador = 0;
    const intervalo = setInterval(() => {
        
        display.innerHTML = `<span class="numero-final" style="font-size: 4rem; opacity: 0.5;">${Math.floor(Math.random() * 99)}</span>`;
        contador++;
        
        if (contador > 15) {

            clearInterval(intervalo);
            const resultado = Math.floor(Math.random() * 100) + 1;
            
            display.innerHTML = `<span class="numero-final">${resultado}</span>`;

        }

    }, 50);

}