//------------------------------------------//
//--|funcionalidad_bloc_de_notas_personal|--//
//------------------------------------------//
const inputNota =
    document.getElementById("inputNota");
const btnAgregar =
    document.getElementById("btnAgregar");
const listaNotas =
    document.getElementById("listaNotas");
/*---------------------------------------------------------*/
/*--|obtener_los_datos_notas_atraves_de_la_base_de_datos|--*/
/*---------------------------------------------------------*/
async function obtenerNotas(){
    const datos =
        new FormData();
    datos.append(
        "accion",
        "obtener"
    );
    const respuesta =
        await fetch(
            "bloc_de_notas_personal.php",
            {
                method:"POST",
                body:datos
            }
        );
    const notas =
        await respuesta.json();
    renderizarNotas(notas);
}
function renderizarNotas(notas){
    if(notas.length === 0){
        listaNotas.innerHTML = `
            <tr class="sin_notas">
                <td colspan="3">
                    Ninguna nota disponible
                </td>
            </tr>
        `;
        return;
    }
    listaNotas.innerHTML = "";
    notas.forEach((nota) => {
        listaNotas.innerHTML += `
            <tr>
                <td
                    class="posicion-celda"
                    style="padding-top: 17px;"
                >
                    ${nota.id}
                </td>
                <td style="padding-top: 16px;">
                    ${nota.nota}
                </td>
                <td class="acciones-celda">
                    <div class="acciones">
                        <button
                            class="editar"
                            title="Editar nota"
                            onclick="
                                editarNota(
                                    ${nota.id},
                                    '${nota.nota}'
                                )
                            "
                        >
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button
                            class="eliminar"
                            title="Eliminar nota"
                            onclick="
                                eliminarNota(
                                    ${nota.id}
                                )
                            "
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}
/*-------------------*/
/*--|agregar_notas|--*/
/*-------------------*/
btnAgregar.addEventListener(
    "click",
    async () => {
        const nuevaNota =
            inputNota.value.trim();
        if(nuevaNota === ""){
            alert("Escribe una nota.");
            return;
        }
        const datos =
            new FormData();
        datos.append(
            "accion",
            "agregar"
        );
        datos.append(
            "nota",
            nuevaNota
        );
        await fetch(
            "bloc_de_notas_personal.php",
            {
                method:"POST",
                body:datos
            }
        );
        inputNota.value = "";
        obtenerNotas();
    }
);
/*------------------*/
/*--|editar_notas|--*/
/*------------------*/
async function editarNota(
    id,
    texto
){
    const nuevaNota =
        prompt(
            "Editar nota:",
            texto
        );
    if(nuevaNota !== null){
        const datos =
            new FormData();
        datos.append(
            "accion",
            "editar"
        );
        datos.append(
            "id",
            id
        );
        datos.append(
            "nota",
            nuevaNota
        );
        await fetch(
            "bloc_de_notas_personal.php",
            {
                method:"POST",
                body:datos
            }
        );
        obtenerNotas();
    }
}
/*--------------------*/
/*--|eliminar_nota|--*/
/*--------------------*/
async function eliminarNota(id){
    const confirmar =
        confirm(
            "¿Eliminar nota?"
        );
    if(!confirmar){
        return;
    }
    const datos =
        new FormData();
    datos.append(
        "accion",
        "eliminar"
    );
    datos.append(
        "id",
        id
    );
    await fetch(
        "bloc_de_notas_personal.php",
        {
            method:"POST",
            body:datos
        }
    );
    obtenerNotas();
}
obtenerNotas();