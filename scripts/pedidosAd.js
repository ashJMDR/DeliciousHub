var btn_enviar = document.getElementById("btn_enviar");
var txt_cliente = document.getElementById("txt_cliente");
var txt_contenido = document.getElementById("txt_contenido");
var dou_total_a_pagar = document.getElementById("dou_total_a_pagar");

var tabla_pedidos = document.getElementById("tabla_pedidos");

var txt_eliminar = document.getElementById("txt_eliminar");
var btn_eliminar = document.getElementById("btn_eliminar");

var txt_actualizar = document.getElementById("txt_actualizar");
var btn_actualizar = document.getElementById("btn_actualizar");

class Pedido {
    constructor(id_pedido, nom_cliente, contenido, fecha, total_a_pagar){
        this.id_pedido = id_pedido;
        this.nom_cliente = nom_cliente;
        this.contenido = contenido;
        this.fecha = fecha;
        this.total_a_pagar = total_a_pagar;
    }
}

let num_interno_de_orden = 3;

var lista_de_pedidos = [];

btn_enviar.addEventListener("click", function(){
    guardar_pedido();
});

btn_eliminar.addEventListener("click", function(){
    eliminar();
});

btn_actualizar.addEventListener("click", function(){
    actualizar();
});

function guardar_pedido(){

    lista_de_pedidos[num_interno_de_orden] = new Pedido(
        num_interno_de_orden,
        txt_cliente.value,
        txt_contenido.value,
        new Date,
        dou_total_a_pagar.value
    );

    num_interno_de_orden ++;

    mostrar_pedidos();

}

function mostrar_pedidos(){
    var cadena_pedido = tabla_pedidos.innerHTML;

    cadena_pedido = `
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Contenido</th>
                    <th>Fecha de pedido</th>
                    <th>Monto a pagar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Juan Pérez</td>
                    <td>Tacos</td>
                    <td>-</td>
                    <td>000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>María Gómez</td>
                    <td>Pozole</td>
                    <td>-</td>
                    <td>000</td>
                </tr>
`;

    lista_de_pedidos.forEach(element => {
        cadena_pedido += `
            <tr>
                <th>${element.id_pedido}</th>
                <th>${element.nom_cliente}</th>
                <th>${element.contenido}</th>
                <th>${element.fecha}</th>
                <th>${element.total_a_pagar}</th>
            </tr>`;
    });

    tabla_pedidos.innerHTML = cadena_pedido;

}

function eliminar(){
    var indice = txt_eliminar.value;
    delete lista_de_pedidos[indice];
    mostrar_pedidos();
}


function actualizar(){
    var indice = txt_actualizar.value;

    lista_de_pedidos[indice] = new Pedido(
        indice,
        txt_cliente.value,
        txt_contenido.value,
        new Date,
        dou_total_a_pagar.value
    );

    mostrar_pedidos();
}
