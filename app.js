//Capturar el valor del campo de entrada

/*Implementa una función para agregar amigos
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y 
añadirlo a la lista de amigos creada anteriormente.

Tareas específicas:
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector 
para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de 
amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena 
vacía.*/
const amigos = [];
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el campo de entrada

function agregarAmigo() {
    const input = document.getElementById('nombreAmigo'); // Obtener el campo de entrada
    const nombre = input.value.trim(); // Eliminar espacios al inicio y al final

    if (nombre === '') { // Validar si el campo está vacío
        alert('Por favor, escribe un nombre.'); 
        return; 
    }

    amigos.push(nombre);    // Agregar el nombre al array de amigos
    input.value = ''; // Limpiar el campo de entrada
    mostrarAmigos(); // Actualizar la lista de amigos
}

function mostrarAmigos() { 
    const amigosList = document.getElementById('listaAmigos'); // Obtener el elemento de la lista
    amigosList.innerHTML = ''; // Limpiar la lista antes de mostrar los amigos

    if (amigos.length === 0) { 
        amigosList.innerHTML = '<li>No hay amigos para mostrar.</li>'; 
        return;
    }

    amigos.forEach(amigo => { 
        const li = document.createElement('li'); 
        li.textContent = amigo; 
        amigosList.appendChild(li); 
    });
}
//De la lista ingresada, se seleccionará un amigo al azar para el juego de amigo secreto
    function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para seleccionar.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio]; // Seleccionar el amigo secreto
    alert(`Tu amigo secreto es: ${amigoSecreto}`); // Mostrar el amigo secreto
    }
}