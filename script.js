let posicion= [0]
let arreglo= []

// Agrega a la pantalla el valor seleccionado
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// Borra el valor en pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

// Calcula la operacion completa en la pantalla
function calcular(posicion,arreglo){
    const valorPantalla = document.getElementById('pantalla').value
    const result = eval(valorPantalla)
    document.getElementById('pantalla').value = result
    arreglo[posicion]= result
    posicion[0]++
}

// Vuelve al valor anterior antes de borrar
function anterior(posicion,arreglo){
    posicion[0]--
    document.getElementById('pantalla').value = arreglo[posicion]
}