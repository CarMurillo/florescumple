// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Look at the stars", time: 35 },
  { text: "Look how they shine for you And everything you do", time: 38 },
  { text: "Yeah, they were all yellow", time: 49 },
  { text: "I came along, I wrote a song for you", time: 52 },
  { text: "And all the things you doAnd it was called, Yellow", time: 60 },
  { text: "So then I took my turn Oh, what a thing to have done", time: 71 },
  { text: "And it was all yellow", time: 83 },
  { text: "Your skin, oh yeah, your skin and bones", time: 91 },
  { text: "Turn into something beautiful, And you know, you know I love you so", time: 97 },
  { text: "You know I love you so", time: 110 },
  { text: "I swam across", time: 115 },
  { text: "I jumped across for you, Oh, what a thing to do", time: 138 },
  { text: "'Cause you were all yellow", time: 149  },  
  { text: "I drew a line, I drew a line for you", time: 152 },
  { text: "Oh, what a thing to do", time: 160 },
  { text: "And it was all yellow", time: 166 },
  { text: "And your skin, oh yeah, your skin and bones", time: 174 },
  { text: "Turn into something beautiful, And you know, for you, I'd bleed myself dry", time: 179 },
  { text: "TFor you, I'd bleed myself dry", time: 193 },
  { text: "It's true", time: 217 },
  { text: "Look how they shine for you, Look how they shine for you", time: 221 },
  { text: "Look how they shine for", time: 221 },
  { text: "Look how they shine for you, Look how they shine for you", time: 237 },
  { text: "Look how they shine", time: 248 },
  { text: "Look at the stars, Look how they shine for you", time: 251 },
  { text: "And all the things that you do", time: 260 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);