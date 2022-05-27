const btnIniciar = document.getElementById("btnIniciar");
let mostrarDatos = document.getElementById("mostrarDatos");

btnIniciar.addEventListener("click", () => {
  const cantidadAlumnos: number = Number(
    prompt("Ingrese la cantidad de alumnos")
  );
  /* Se definen las variables */
  let arrayNombreAlumno: string[] = new Array(cantidadAlumnos);
  let arrayNota1: number[] = new Array(cantidadAlumnos);
  let arrayNota2: number[] = new Array(cantidadAlumnos);
  let arrayNota3: number[] = new Array(cantidadAlumnos);
  let arrayPromedioAnual: number[] = new Array(cantidadAlumnos);

  function cargaArray(ordinal: string, studentName: string) {
    let nota: number = Number(
      prompt(`Ingrese la ${ordinal} nota del Estudiante ${studentName}`)
    );
    return nota;
  }

  /* Se cargan los datos en sus respectivos arreglos */
  for (let i = 0; i < cantidadAlumnos; i++) {
    arrayNombreAlumno[i] = prompt("Ingrese el nombre del Estudiante");
    arrayNota1[i] = cargaArray("primera", arrayNombreAlumno[i]);
    arrayNota2[i] = cargaArray("segunda", arrayNombreAlumno[i]);
    arrayNota3[i] = cargaArray("tercera", arrayNombreAlumno[i]);
    arrayPromedioAnual[i] = (arrayNota1[i] + arrayNota2[i] + arrayNota3[i]) / 3;
    /* Muestra los resultados en la página HTML */
    mostrarDatos.innerHTML += `El promedio anual del estudiante ${arrayNombreAlumno[i]}, es ${arrayPromedioAnual[i]} <br>`;
  }
});
