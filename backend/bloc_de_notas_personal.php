<?php
include("conexion.php");
header("Content-Type: application/json");
/*----------------------------------------------*/
/*--|obteniendo_datos_al_informacion_de_notas|--*/
/*----------------------------------------------*/
if(
    isset($_POST["accion"]) &&
    $_POST["accion"] == "obtener"
){
    $sql =
    "
        SELECT *
        FROM notas_personales
        ORDER BY id DESC
    ";
    $resultado =
        $conexion->query($sql);
    $notas = [];
    while(
        $fila =
        $resultado->fetch_assoc()
    ){
        $notas[] = $fila;
    }
    echo json_encode($notas);
    exit();
}
/*--------------------------------------*/
/*--|obteniendo_datos_al_agregar_nota|--*/
/*--------------------------------------*/
if(
    isset($_POST["accion"]) &&
    $_POST["accion"] == "agregar"
){
    $nota =
        $_POST["nota"];
    $sql =
    "
        INSERT INTO notas_personales(nota)
        VALUES('$nota')
    ";
    if($conexion->query($sql)){
        echo json_encode([
            "mensaje" => "success"
        ]);
    }else{
        echo json_encode([
            "mensaje" => "error"
        ]);
    }
    exit();
}
/*-------------------------------------*/
/*--|obteniendo_datos_al_editar_nota|--*/
/*-------------------------------------*/
if(
    isset($_POST["accion"]) &&
    $_POST["accion"] == "editar"
){
    $id =
        $_POST["id"];
    $nota =
        $_POST["nota"];
    $sql =
    "
        UPDATE notas_personales
        SET nota = '$nota'
        WHERE id = '$id'
    ";
    if($conexion->query($sql)){
        echo json_encode([
            "mensaje" => "success"
        ]);
    }else{
        echo json_encode([
            "mensaje" => "error"
        ]);
    }
    exit();
}
/*---------------------------------------*/
/*--|obteniendo_datos_al_eliminar_nota|--*/
/*---------------------------------------*/
if(
    isset($_POST["accion"]) &&
    $_POST["accion"] == "eliminar"
){
    $id =
        $_POST["id"];
    $sql =
    "
        DELETE FROM notas_personales
        WHERE id = '$id'
    ";
    if($conexion->query($sql)){
        echo json_encode([
            "mensaje" => "success"
        ]);
    }else{
        echo json_encode([
            "mensaje" => "error"
        ]);
    }
    exit();
}
?>