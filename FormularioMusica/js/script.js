let temporizador;

document.addEventListener('DOMContentLoaded', () => {
  let tiempoEnSegundos = 420; // esto es el tiempo del conometro 
  const displayElement = document.getElementById('tiempo-display'); // busca donde mostrara el conometro, que este caso es el id que gemos creado en el span
  temporizador = setInterval(() => { // ejecuta cada segundo 
    
    tiempoEnSegundos--;
    let minutos = Math.floor(tiempoEnSegundos / 60); // calculamos el tiempo restante que queda
    let segundos = tiempoEnSegundos % 60;

    // añade el 0 a la izquierda para que salga 4:01 en vez de 4:1, si es menor a 10
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // actualiza el texto en pantalla
    displayElement.textContent = `${minutos}:${segundos}`;
    
    // cuando el contandor llega a 0, manda una aleta de que se ha acabado el tiempo y depues llama a evaluarquiz, que manda la respuesta directamente 
    if (tiempoEnSegundos <= 0) {
      clearInterval(temporizador); 
      
      alert("¡Se acabó el tiempo! Enviando respuestas automáticamente..."); 
      
      evaluarQuiz(); 
    }
  }, 1000); // hace que se repita todo el bloque cada segundo 

  
});

document.addEventListener('DOMContentLoaded', () => {    
    const cancion = new Audio('../mp3/1318.mp3');
    cancion.volume = 0.5;
    const boton = document.getElementById('botonMusica');
    if (boton) {
        boton.addEventListener('click', () => {
            if (cancion.paused) {
                cancion.play();
                boton.textContent = "Pausar Canción";
                boton.style.backgroundColor = "#ff4444"; 
            } else {
                cancion.pause();
                boton.textContent = "Reproducir Canción";
                boton.style.backgroundColor = "#1DB954"; 
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-video');
    const miVideo = document.createElement('video');
    miVideo.controls = true;
    miVideo.width = 600;
    miVideo.src = '../mp3/newera.mp4';
    contenedor.appendChild(miVideo);
});




function evaluarQuiz() {
    // Sirve para apagar el temporizador
    clearInterval(temporizador);
    const cajaCronometro = document.getElementById('cronometro');
    if (cajaCronometro) cajaCronometro.style.display = 'none';

    // sirve para quitar el boton de enviar 
    const botonEnviar = document.getElementById('boton-enviar');
    if (botonEnviar) botonEnviar.style.display = 'none';

    // sirve para bloquear las respuestas 
    const todosLosInputs = document.querySelectorAll('#quizForm input, #quizForm select');
    todosLosInputs.forEach(input => input.disabled = true);

    const totalQuestions = 17;
    let score = 0; 
    
    
    const cajas = document.querySelectorAll('.pregunta');

    function marcarError(indice, textoCorrecto) {
        cajas[indice].innerHTML += `<p style="color: red; font-weight: bold; margin-top: 10px;">Incorrecto. La correcta era: ${textoCorrecto}</p>`;
    }


    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    if (q1 === "badbunny") score++; 
    else marcarError(0, "Bad Bunny");

    const q2 = document.getElementById("q2").value.toLowerCase().trim();
    if (q2 === "los green lanters" || q2 === "los green lanters 2.0" || q2 === "vicios" || q2 === "vivir pa' quedarse" || q2 === "nacer de nuevo") score++;
    else marcarError(1, "Los Green Lanters, Vicios, etc.");

    const q3 = document.getElementById("q3").value.toLowerCase().trim();
    if (q3 === "jc_yovng") score++;
    else marcarError(2, "JC Reyes y YOVNGCHIMI");

    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    if (q4 === "crema") score++;
    else marcarError(3, "Crema");

    const q5 = document.querySelector('input[name="q5"]:checked')?.value;
    if (q5 === "etarmx") score++;
    else marcarError(4, "ETA - RMX");

    const q6 = document.getElementById("q6").value.toLowerCase().trim();
    if (q6 === "lux") score++; 
    else marcarError(5, "LUX");

    const q7 = document.querySelector('input[name="q7"]:checked')?.value;
    if (q7 === "badbunny25") score++;
    else marcarError(6, "DeBí TiRAR MáS FOToS (Bad Bunny)");

    const q8 = document.getElementById("q8").value.trim();
    if (q8 === "5-6") score++;
    else marcarError(7, "5/6 millones");

    const q9 = document.querySelector('input[name="q9"]:checked')?.value;
    if (q9 === "don_kbrn") score++;
    else marcarError(8, "DON KBRN");

    const q10 = document.querySelector('input[name="q10"]:checked')?.value;
    if (q10 === "angelitos") score++;
    else marcarError(9, "Los Angelitos");

    const q11 = document.querySelector('input[name="q11"]:checked')?.value;
    if (q11 === "alejo" || q11 === "saiko") score++;
    else marcarError(10, "Alejo o Saiko");

    const q12 = document.getElementById("q12").value.trim();
    if (q12 === "12") score++;
    else marcarError(11, "12");

    const q13 = document.querySelector('input[name="q13"]:checked')?.value;
    if (q13 === "cielo") score++;
    else marcarError(12, "Cielo");

    const q14 = document.querySelector('input[name="q14"]:checked')?.value;
    if (q14 === "2020") score++;
    else marcarError(13, "2020");

    const q15 = document.querySelector('input[name="q15"]:checked')?.value;
    if (q15 === "DATA") score++;
    else marcarError(14, "DATA");

    const q16 = document.getElementById("q16").value.toLowerCase().trim();
    if (q16 === "13/18") score++; 
    else marcarError(15, "13/18");

    const q17 = document.querySelector('input[name="q17"]:checked')?.value;
    if (q17 === "newera") score++;
    else marcarError(16, "New Era");


    let notaFinal = (score / totalQuestions) * 10;
    notaFinal = parseFloat(notaFinal.toFixed(1)); 

    const resultDiv = document.getElementById("resultado");
    resultDiv.innerHTML = `Has acertado ${score} de ${totalQuestions} preguntas.<br>Tu nota final es: <strong>${notaFinal} sobre 10</strong>`; 
    
    if (notaFinal >= 5) {
        resultDiv.style.color = "green"; 
    } else {
        resultDiv.style.color = "red";  
    }
}


