// Lógica para reproducir el audio del botón "botonMusica"
document.addEventListener('DOMContentLoaded', () => {    
    // Cargamos el archivo de audio
    const cancion = new Audio('./1318.mp3');

    // Seleccionamos el botón
    const boton = document.getElementById('botonMusica');

    // Añadimos el evento de clic
    if (boton) {
        boton.addEventListener('click', () => {
            if (cancion.paused) {
                cancion.play();
                boton.textContent = "Pausar Canción ⏸️";
                boton.style.backgroundColor = "#ff4444"; 
            } else {
                cancion.pause();
                boton.textContent = "Reproducir Canción 🎵";
                boton.style.backgroundColor = "#1DB954"; 
            }
        });
    }
});

function evaluarQuiz() {
    const totalQuestions = 16;
    let score = 0; 

    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    if (q1 === "badbunny") score++; 

    const q2 = document.getElementById("q2").value.toLowerCase().trim();
    if (q2 === "los green lanters" || q2 === "los green lanters 2.0" || q2 === "vicios" || q2 === "vivir pa' quedarse" || q2 === "nacer de nuevo") {
        score++;
    }

    const q5 = document.querySelector('input[name="q5"]:checked')?.value;
    if (q5 === "etarmx") score++;

    const q3 = document.getElementById("q3").value.toLowerCase().trim();
    if (q3 === "jc_yovng") score++;

    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    if (q4 === "crema") score++;

    const q6 = document.getElementById("q6").value.toLowerCase().trim();
    if (q6 === "lux") score++; 

    const q7 = document.querySelector('input[name="q7"]:checked')?.value;
    if (q7 === "badbunny25") score++;

    const q8 = document.getElementById("q8").value.trim();
    if (q8 === "5-6") score++;

    const q9 = document.querySelector('input[name="q9"]:checked')?.value;
    if (q9 === "don_kbrn") score++;

    const q10 = document.querySelector('input[name="q10"]:checked')?.value;
    if (q10 === "angelitos") score++;

    const q11 = document.querySelector('input[name="q11"]:checked')?.value;
    if (q11 === "alejo" || q11 === "saiko") score++;

    const q12 = document.getElementById("q12").value.trim();
    if (q12 === "12") score++;

    const q13 = document.querySelector('input[name="q13"]:checked')?.value;
    if (q13 === "cielo") score++;

    const q14 = document.querySelector('input[name="q14"]:checked')?.value;
    if (q14 === "2020") score++;

    const q15 = document.querySelector('input[name="q14"]:checked')?.value;
    if (q15 === "DATA") score++;

    const q16 = document.getElementById("q16").value.toLowerCase().trim();
    if (q16 === "13/18") score++; 

    let notaFinal = (score / totalQuestions) * 10;
    notaFinal = parseFloat(notaFinal.toFixed(1)); // Parsefloat quita el .0 si sobra


    const resultDiv = document.getElementById("resultado");
    resultDiv.innerHTML = `Has acertado ${score} de ${totalQuestions} preguntas.<br>Tu nota final es: <strong>${notaFinal} sobre 10</strong>`; 
    
    if (notaFinal >= 5) {
        resultDiv.style.color = "green"; 
    } else {
        resultDiv.style.color = "red";  
    }
}