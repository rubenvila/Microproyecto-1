let numeDeLaMatriz = []

function generarMatrices() {
    const matrixSize = parseInt(
        document.getElementById("matrixSize").value
    );
    const numMatrices = 4; // Número de matrices a generar
    const matrices = [];

    for (let m = 0; m < numMatrices; m++) {
        const matriz = [];
        const numerosDisponibles = Array.from(
        { length: 50 },
        (_, i) => i + 1
        );

        for (let i = 0; i < matrixSize; i++) {
        const fila = [];
        for (let j = 0; j < matrixSize; j++) {
            const indiceAleatorio = Math.floor(
            Math.random() * numerosDisponibles.length
            );
            const numeroAleatorio = numerosDisponibles.splice(
            indiceAleatorio,
            1
            )[0];
            fila.push(numeroAleatorio);
            numeDeLaMatriz.push(numeroAleatorio);
        }
        matriz.push(fila);
        }

        matrices.push(matriz);
    }

    // Mostrar las matrices en la página
    const matricesContainer = document.getElementById("matricesContainer");
    matricesContainer.innerHTML = "";
    matrices.forEach((matriz, index) => {
        matricesContainer.innerHTML += `<h3>Cartón ${index + 1}:</h3>`;
        matricesContainer.innerHTML +=
        "<table>" +
        matriz
            .map(
            (row) =>
                `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
            )
            .join("") +
        "</table>";
    });

}
let btn1 = document.querySelector('#clickbtn');
let showclicks = document.querySelector('#showdata');
let counter = 0;

function printClick() {
    counter++;
    showclicks.innerHTML = "Turno de juego: " + counter;
// Este es el param. que se cambia para aumentar los turnos de bingo (máx. 50)
    if(counter == 26) {
        //alert('SE HA ACABADO EL JUEGO');
        swal("SE HA ACABADO EL JUEGO");
        //location.reload();
    }
    
} 
btn1.addEventListener('click',printClick);
// "addEventListener" escucha el evento 'click', y cada vez que ese evento pasa, se lleva a cabo la funcion printClick

const numerosPosibles = Array.from({ length: 50 }, (_, i) => i + 1);

// Ordena los números al azar
numerosPosibles.sort(() => (Math.random() > 0.5 ? 1 : -1));

// Función para generar un número y mostrarlo en la página
function generarNumero() {
    if (numerosPosibles.length > 0) {
        const numeroAleatorio = numerosPosibles.pop();
        document.getElementById(
            "numeroGenerado"
        ).textContent = `${numeroAleatorio}`;
        numeComparar = numeroAleatorio
    }

    for(i=0; i < numeDeLaMatriz.length; i++) {
        if(numeDeLaMatriz[i] == numeComparar){
            //alert("¡TIENES EL NÚMERO " + numeDeLaMatriz[i] + "!") 
            swal("¡TIENES EL NÚMERO "+ numeDeLaMatriz[i]+ "!");
        }     

    }

}
