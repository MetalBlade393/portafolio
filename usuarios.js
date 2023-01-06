var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
    var tablaUsuario = [];
}

listar();

function listar() {
    console.log("Ingresando a listas, espere...");

    var dataFila = '';

    if (tablaUsuario.length > 0) {
        for (const i in tablaUsuario){
            var varUsuario = JSON.parse(tablaUsuario[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+varUsuario.idUsuario+"</td>";
            dataFila += "<td>"+varUsuario.nombre+"</td>";
            dataFila += "<td>"+varUsuario.apellido+"</td>";
            dataFila += "<td>"+varUsuario.cedula+"</td>";
            dataFila += "<td>"+varUsuario.telefono+"</td>";
            dataFila += "<td>"+varUsuario.estado+"</td>";
            dataFila += "<td>"+"<button type='button' class='btn btn-warning' onclick='abrirForm("+varUsuario.idUsuario+")'>EDITAR</button>"+"</td>";
            dataFila += "</tr>";
        }
        document.getElementById("dataUsers").innerHTML = dataFila;
    }
}

function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("usuarios-form.html");
}