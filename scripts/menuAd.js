var btn_enviar = document.getElementById("btn_enviar");
var img_platillo = document.getElementById("img_platillo");
var txt_nombrePlatillo = document.getElementById("txt_nombrePlatillo");
var txt_precio = document.getElementById("txt_precio");
var txt_precioOferta = document.getElementById("txt_precioOferta");

var tabla_menu = document.getElementById("tabla_menu");

var txt_eliminar = document.getElementById("txt_eliminar");
var btn_eliminar = document.getElementById("btn_eliminar");

var txt_actualizar = document.getElementById("txt_actualizar");
var btn_actualizar = document.getElementById("btn_actualizar");

class Platillo {
    constructor(id_platillo, img_platillo, nombrePlatillo, precio, precioOferta){
        this.id_platillo = id_platillo;
        this.img_platillo = img_platillo;
        this.nombrePlatillo = nombrePlatillo;
        this.precio = precio;
        this.precioOferta = precioOferta;
    }
}

let num_interno_de_platillo = 1;

var lista_de_platillos = [];

btn_enviar.addEventListener("click", function(){
    guardar_platillo();
});

btn_eliminar.addEventListener("click", function(){
    eliminar();
});

btn_actualizar.addEventListener("click", function(){
    actualizar();
});

function guardar_platillo(){

    lista_de_platillos[num_interno_de_platillo] = new Platillo(
        num_interno_de_platillo,
        img_platillo.value,
        txt_nombrePlatillo.value,
        txt_precio.value,
        txt_precioOferta.value
    );

    num_interno_de_platillo ++;

    mostrar_platillos();

}

function mostrar_platillos(){
    var cadena_platillo = tabla_menu.innerHTML;

    cadena_platillo = `
                <tr>
                    <th>ID</th>
                    <th>Imagen</th>
                    <th>Nombre del platillo</th>
                    <th>Precio</th>
                    <th>Precio de oferta</th>
                </tr>
`;

    lista_de_platillos.forEach(element => {
        cadena_platillo += `
            <tr>
                <th>${element.id_platillo}</th>
                <th>${element.img_platillo}</th>
                <th>${element.nombrePlatillo}</th>
                <th>${element.precio}</th>
                <th>${element.precioOferta}</th>
            </tr>`;
    });

    tabla_menu.innerHTML = cadena_platillo;

}

function eliminar(){
    var indice = txt_eliminar.value;
    delete lista_de_platillos[indice];
    mostrar_platillos();
}


function actualizar(){
    var indice = txt_actualizar.value;

    lista_de_platillos[indice] = new Platillo(
        num_interno_de_platillo,
        img_platillo.value,
        txt_nombrePlatillo.value,
        txt_precio.value,
        txt_precioOferta.value
    );

    mostrar_platillos();
}
