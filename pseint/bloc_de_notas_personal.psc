Algoritmo bloc_de_notas_personal
	Definir notas Como Caracter
	Definir opcion, cantidad, i, posicion Como Entero
	Definir nuevaNota Como Caracter
	Dimension notas[100]
	cantidad <- 0
	Repetir
		Escribir "==========================="
		Escribir "     BLOC DE NOTAS"
		Escribir "==========================="
		Escribir "1. Crear nota"
		Escribir "2. Ver notas"
		Escribir "3. Editar nota"
		Escribir "4. Eliminar nota"
		Escribir "5. Salir"
		Escribir "Seleccione una opcion:"
		Leer opcion
		Segun opcion Hacer
			1:
				Escribir "Escriba la nueva nota:"
				Leer nuevaNota
				cantidad <- cantidad + 1
				notas[cantidad] <- nuevaNota
				Escribir "Nota guardada correctamente."
			2:
				Si cantidad = 0 Entonces
					Escribir "No hay notas guardadas."
				SiNo
					Escribir "===== LISTA DE NOTAS ====="
					Para i <- 1 Hasta cantidad Hacer
						Escribir i, ". ", notas[i]
					FinPara
				FinSi
			3:
				Si cantidad = 0 Entonces
					Escribir "No hay notas para editar."
				SiNo
					Escribir "Seleccione la nota a editar:"
					Para i <- 1 Hasta cantidad Hacer
						Escribir i, ". ", notas[i]
					FinPara
					Leer posicion
					Si posicion >= 1 Y posicion <= cantidad Entonces
						Escribir "Escriba la nueva nota:"
						Leer nuevaNota
						notas[posicion] <- nuevaNota
						Escribir "Nota actualizada."
					SiNo
						Escribir "Posicion invalida."
					FinSi
				FinSi
			4:
				Si cantidad = 0 Entonces
					Escribir "No hay notas para eliminar."
				SiNo
					Escribir "Seleccione la nota a eliminar:"
					Para i <- 1 Hasta cantidad Hacer
						Escribir i, ". ", notas[i]
					FinPara
					Leer posicion
					Si posicion >= 1 Y posicion <= cantidad Entonces
						Para i <- posicion Hasta cantidad - 1 Hacer
							notas[i] <- notas[i + 1]
						FinPara
						cantidad <- cantidad - 1
						Escribir "Nota eliminada."
					SiNo
						Escribir "Posicion invalida."
					FinSi
				FinSi
			5:
				Escribir "Saliendo del sistema..."
			De Otro Modo:
				Escribir "Opcion invalida."
		FinSegun
		Escribir ""
	Hasta Que opcion = 5
FinAlgoritmo