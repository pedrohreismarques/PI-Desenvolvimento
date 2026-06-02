const robo = document.getElementById("robo");

let subindo = true;
let posicao = 0;

setInterval(() => {

    if(subindo){
        posicao++;
    }else{
        posicao--;
    }

    robo.style.transform = `translateY(${-posicao}px)`;

    if(posicao >= 15){
        subindo = false;
    }

    if(posicao <= 0){
        subindo = true;
    }

}, 40);

const canvas = document.getElementById("confete");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetes = [];

// MENOS CONFETES
for (let i = 0; i < 70; i++) {

    confetes.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height - canvas.height,

        // MENORES
        radius: Math.random() * 4 + 1,

        // MAIS SUAVES
        speed: Math.random() * 2 + 1,

        // CORES MAIS BONITAS
        color: [
            "#0bff03ff",
            "#fb8500",
            "#2723f5ff",
            "#eb028aff",
            "#23ebc9ff"
        ][Math.floor(Math.random() * 5)]

    });
}

function animar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetes.forEach(confete => {

        ctx.beginPath();

        ctx.arc(
            confete.x,
            confete.y,
            confete.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = confete.color;

        ctx.fill();

        confete.y += confete.speed;

        // LEVE MOVIMENTO LATERAL
        confete.x += Math.sin(confete.y * 0.01);

        if (confete.y > canvas.height) {

            confete.y = -20;

            confete.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animar);
}

animar();

function mostrarLoading() {

    document.getElementById("loading").style.display = "flex";

    let progresso = 0;

    const barra = document.getElementById("barra");

    const intervalo = setInterval(() => {

        progresso += 5;

        barra.style.width = progresso + "%";

        if (progresso >= 95) {
            clearInterval(intervalo);
        }

    }, 100);
}
document.querySelectorAll("input").forEach(input => {

    input.addEventListener("focus", () => {

        setTimeout(() => {

            input.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    });

});