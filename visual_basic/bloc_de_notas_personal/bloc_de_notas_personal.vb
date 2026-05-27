Imports System
Imports System.Collections.Generic
Module bloc_de_notas_personal
    Sub Main(args As String())
        Dim notas As New List(Of String)
        While True
            Console.WriteLine("===========================")
            Console.WriteLine("     BLOC DE NOTAS")
            Console.WriteLine("===========================")
            Console.WriteLine("1. Crear nota")
            Console.WriteLine("2. Ver notas")
            Console.WriteLine("3. Editar nota")
            Console.WriteLine("4. Eliminar nota")
            Console.WriteLine("5. Salir")
            Console.Write("Seleccione una opcion: ")
            Dim opcion As String = Console.ReadLine()
            If opcion = "1" Then
                Console.Write("Escriba la nueva nota: ")
                Dim nuevaNota As String = Console.ReadLine()
                notas.Add(nuevaNota)
                Console.WriteLine("Nota guardada correctamente.")
            ElseIf opcion = "2" Then
                If notas.Count = 0 Then
                    Console.WriteLine("No hay notas guardadas.")
                Else
                    Console.WriteLine("===== LISTA DE NOTAS =====")
                    For i As Integer = 0 To notas.Count - 1
                        Console.WriteLine((i + 1).ToString() & ". " & notas(i))
                    Next
                End If
            ElseIf opcion = "3" Then
                If notas.Count = 0 Then
                    Console.WriteLine("No hay notas para editar.")
                Else
                    Console.WriteLine("Seleccione la nota a editar:")
                    For i As Integer = 0 To notas.Count - 1
                        Console.WriteLine((i + 1).ToString() & ". " & notas(i))

                    Next
                    Console.Write("Numero de la nota: ")
                    Dim posicion As Integer = Integer.Parse(Console.ReadLine())
                    If posicion >= 1 And posicion <= notas.Count Then
                        Console.Write("Escriba la nueva nota: ")
                        Dim nuevaNota As String = Console.ReadLine()
                        notas(posicion - 1) = nuevaNota
                        Console.WriteLine("Nota actualizada.")
                    Else
                        Console.WriteLine("Posicion invalida.")
                    End If
                End If
            ElseIf opcion = "4" Then
                If notas.Count = 0 Then
                    Console.WriteLine("No hay notas para eliminar.")
                Else
                    Console.WriteLine("Seleccione la nota a eliminar:")
                    For i As Integer = 0 To notas.Count - 1
                        Console.WriteLine((i + 1).ToString() & ". " & notas(i))
                    Next
                    Console.Write("Numero de la nota: ")
                    Dim posicion As Integer = Integer.Parse(Console.ReadLine())
                    If posicion >= 1 And posicion <= notas.Count Then
                        notas.RemoveAt(posicion - 1)
                        Console.WriteLine("Nota eliminada.")
                    Else
                        Console.WriteLine("Posicion invalida.")
                    End If
                End If
            ElseIf opcion = "5" Then
                Console.WriteLine("Saliendo del sistema...")
                Exit While
            Else
                Console.WriteLine("Opcion invalida.")
            End If
            Console.WriteLine()
        End While
    End Sub
End Module