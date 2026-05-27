//------------------------------------------//
//--|funcionalidad_bloc_de_notas_personal|--//
//------------------------------------------//
const inputNota =
    document.getElementById("inputNota");
const btnAgregar =
    document.getElementById("btnAgregar");
const listaNotas =
    document.getElementById("listaNotas");
let notas =
    JSON.parse(
        localStorage.getItem("notas")
    ) || [];
function guardarNotas(){
    localStorage.setItem(
        "notas",
        JSON.stringify(notas)
    );
}
function renderizarNotas(){
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
    notas.forEach((nota, index) => {
        listaNotas.innerHTML += `
            <tr>
                <td class="posicion-celda"  style="padding-top: 17px;">
                    ${index + 1}
                </td>
                <td style="padding-top: 16px;">
                    ${nota}
                </td>
                <td class="acciones-celda">
                    <div class="acciones">
                        <button
                            class="editar"
                            title="Editar nota"
                            onclick="editarNota(${index})"
                        >
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button
                            class="eliminar"
                            title="Eliminar nota"
                            onclick="eliminarNota(${index})"
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
btnAgregar.addEventListener("click", () => {
    const nuevaNota =
        inputNota.value.trim();
    if(nuevaNota === ""){
        alert("Escribe una nota.");
        return;
    }
    notas.push(nuevaNota);
    guardarNotas();
    inputNota.value = "";
    renderizarNotas();
});
/*------------------*/
/*--|editar_notas|--*/
/*------------------*/
function editarNota(index){
    const nuevaNota =
        prompt(
            "Editar nota:",
            notas[index]
        );
    if(nuevaNota !== null){
        notas[index] = nuevaNota;
        guardarNotas();
        renderizarNotas();
    }
}
function eliminarNota(index){
    notas.splice(index, 1);
    guardarNotas();
    renderizarNotas();
}
renderizarNotas();