const frases = [
    "Você é o melhor capítulo da minha história. ❤️",
    "Meu lugar favorito no mundo é ao seu lado. 💕",
    "Se eu pudesse te dar uma coisa, daria meus olhos para você ver o quanto é especial. 🌹",
    "Com você, até os dias cinzentos ficam coloridos. 🌈",
    "Você é meu sonho que virou realidade. 💖"
];

function mostrarFrase() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").innerText = fraseAleatoria;
}

// -------------------
// Corações flutuando
// -------------------
function criarCoracao() {
    const heart = document.createElement("span");
    heart.classList.add("heart");

    // Variação de emojis
    const emojis = ["❤️", "💖", "💕", "💓", "💞"];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Posição inicial aleatória
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";

    // Direção de voo aleatória
    const x = (Math.random() * 200 - 100) + "px"; // -100px até 100px
    const y = (Math.random() * -200 - 50) + "px"; // voa para cima

    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);

    document.body.appendChild(heart);

    // Remove depois da animação
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Criar corações continuamente
setInterval(criarCoracao, 700);
