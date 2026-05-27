notas = []
while True:
    print("===========================")
    print("     BLOC DE NOTAS")
    print("===========================")
    print("1. Crear nota")
    print("2. Ver notas")
    print("3. Editar nota")
    print("4. Eliminar nota")
    print("5. Salir")
    opcion = input("Seleccione una opcion: ")
    if opcion == "1":
        nueva_nota = input("Escriba la nueva nota: ")
        notas.append(nueva_nota)
        print("Nota guardada correctamente.")
    elif opcion == "2":
        if len(notas) == 0:
            print("No hay notas guardadas.")
        else:
            print("===== LISTA DE NOTAS =====")
            for i, nota in enumerate(notas, start=1):
                print(i, ".", nota)
    elif opcion == "3":
        if len(notas) == 0:
            print("No hay notas para editar.")
        else:
            print("Seleccione la nota a editar:")
            for i, nota in enumerate(notas, start=1):
                print(i, ".", nota)
            posicion = int(input("Numero de la nota: "))
            if posicion >= 1 and posicion <= len(notas):
                nueva_nota = input("Escriba la nueva nota: ")
                notas[posicion - 1] = nueva_nota
                print("Nota actualizada.")
            else:
                print("Posicion invalida.")
    elif opcion == "4":
        if len(notas) == 0:
            print("No hay notas para eliminar.")
        else:
            print("Seleccione la nota a eliminar:")
            for i, nota in enumerate(notas, start=1):
                print(i, ".", nota)
            posicion = int(input("Numero de la nota: "))
            if posicion >= 1 and posicion <= len(notas):
                notas.pop(posicion - 1)
                print("Nota eliminada.")
            else:
                print("Posicion invalida.")
    elif opcion == "5":
        print("Saliendo del sistema...")
        break
    else:
        print("Opcion invalida.")
    print()