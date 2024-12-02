var btn_enviar = document.getElementById("btn_enviar");
var txt_nombre = document.getElementById("txt_nombre");
var txt_apellidos = document.getElementById("txt_apellidos");
var txt_correo = document.getElementById("txt_correo");

var tabla_clientes = document.getElementById("tabla_clientes");

var txt_eliminar = document.getElementById("txt_eliminar");
var btn_eliminar = document.getElementById("btn_eliminar");

var txt_actualizar = document.getElementById("txt_actualizar");
var btn_actualizar = document.getElementById("btn_actualizar");

class Cliente {
    constructor(id_cliente, nombre, apellidos, correo){
        this.id_cliente = id_cliente;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
    }
}

let num_interno_de_cliente = 3;

var lista_de_clientes = [];

btn_enviar.addEventListener("click", function(){
    guardar_cliente();
});

btn_eliminar.addEventListener("click", function(){
    eliminar();
});

btn_actualizar.addEventListener("click", function(){
    actualizar();
});

function guardar_cliente(){

    lista_de_clientes[num_interno_de_cliente] = new Cliente(
        num_interno_de_cliente,
        txt_nombre.value,
        txt_apellidos.value,
        txt_correo.value
    );

    num_interno_de_cliente ++;

    mostrar_clientes();

}

function mostrar_clientes(){
    var cadena_cliente = tabla_clientes.innerHTML;

    cadena_cliente = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre(s)</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Juan</td>
                    <td>Pérez</td>
                    <td>juanP@gmail.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>María</td>
                    <td>Gómez</td>
                    <td>mariaG@gmail.com</td>
                </tr>
            </tbody>
`;

    lista_de_clientes.forEach(element => {
        cadena_cliente += `
            <tr>
                <th>${element.id_cliente}</th>
                <th>${element.nombre}</th>
                <th>${element.apellidos}</th>
                <th>${element.correo}</th>
            </tr>`;
    });

    tabla_clientes.innerHTML = cadena_cliente;

}

function eliminar(){
    var indice = txt_eliminar.value;
    delete lista_de_clientes[indice];
    mostrar_clientes();
}


function actualizar(){
    var indice = txt_actualizar.value;

    lista_de_clientes[indice] = new Cliente(
        indice,
        txt_nombre.value,
        txt_apellidos.value,
        txt_correo.value
    );

    mostrar_clientes();
}
