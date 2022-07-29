
let seguir = "N";

do
{
    console.log("Bienvenido")
    let cant = Number(prompt("Ingresa la cantidad de amigos: "))
    console.log("Tu equipo es de "+cant+" amigos.")
    for (let i = 1; i <= cant; i++) 
    {
        let amigo = prompt("Cual es el nombre de tu amigo #"+i+"?")
        console.log(i+". "+amigo)
    }

    seguir=prompt("Presiona S para hacer una lista nueva, o cualquier tecla para salir del programa.")

}while(seguir =='S' || seguir =='s')
