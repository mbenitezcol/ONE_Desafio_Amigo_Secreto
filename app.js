// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarEntrada() {
    document.querySelector('#amigo').value = "";
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim(); // Elimina espacios extras
    
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
    } else if (!amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo); 
        agregarLista(); // Ahora agrega la lista completa correctamente
    } else {
        alert("Este amigo ya ha sido agregado.");
    }

    limpiarEntrada();
}

// Función para actualizar la lista en el HTML
function agregarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    amigos.forEach(amigo => {
        let elemento = document.createElement("li");
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;
}

