var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
    var tablaUsuario = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if(idForm == null){
    var idForm = 0;
}

cargarPagina();

function cargarPagina(){
    if (idForm > 0) {
        //Con esta sentencia, se estan sacando los datos de la fila de la tabla y se muestran en el formulario
        for (const i in tablaUsuario){
            var varUsuario = JSON.parse(tablaUsuario[i]);
            if (varUsuario.idUsuario == idForm) {
                document.getElementById("txtIdUsuario").value = varUsuario.idUsuario;
                document.getElementById("txtNombre").value = varUsuario.nombre;
                document.getElementById("txtApellido").value = varUsuario.apellido;
                document.getElementById("txtCedula").value = varUsuario.cedula;
                document.getElementById("txtTelf").value = varUsuario.telefono;
                document.getElementById("cboEstado").value = varUsuario.estado;
                break;
            }
        }
    }
}

function guardar() {

    Swal.fire({
        title:'GUARDAR',
        html: '¿Desea guardar los cambios?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {
                console.log("Presiono Guardar");
                var objUsuarios = JSON.stringify({
                    idUsuario: (idForm>0)? idForm: (tablaUsuario.length + 1),
                    nombre: document.getElementById("txtNombre").value,
                    apellido: document.getElementById("txtApellido").value,
                    cedula: document.getElementById("txtCedula").value,
                    telefono: document.getElementById("txtTelf").value,
                    estado: document.getElementById("cboEstado").value
                });
                console.log(objUsuarios);
                //Editar Usuario
                if (idForm > 0) {
                    for (const i in tablaUsuario){
                        var varUsuario = JSON.parse(tablaUsuario[i]);
                        if (varUsuario.idUsuario == idForm) {
                            tablaUsuario[i] = objUsuarios;
                            break;
                        }
                    }
                }else{
                    //Nuevos Usuarios
                    tablaUsuario.push(objUsuarios);
                }
                
                localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));

                Swal.fire('Cambios guardados', '', 'success').then(
                    (result) => {
                        window.location.replace("index.html");
                    }
                );
            }else if (result.isDenied){
                Swal.fire('Cambios no guardados', '', 'info');
            }
        }
    );
}