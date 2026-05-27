import java.util.ArrayList;
import java.util.Scanner;
public class bloc_de_notas_personal {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        ArrayList<String> notas = new ArrayList<>();
        while (true) {
            System.out.println("===========================");
            System.out.println("     BLOC DE NOTAS");
            System.out.println("===========================");
            System.out.println("1. Crear nota");
            System.out.println("2. Ver notas");
            System.out.println("3. Editar nota");
            System.out.println("4. Eliminar nota");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opcion: ");
            String opcion = entrada.nextLine();
            if (opcion.equals("1")) {
                System.out.print("Escriba la nueva nota: ");
                String nuevaNota = entrada.nextLine();
                notas.add(nuevaNota);
                System.out.println("Nota guardada correctamente.");
            }
            else if (opcion.equals("2")) {
                if (notas.size() == 0) {
                    System.out.println("No hay notas guardadas.");
                } else {
                    System.out.println("===== LISTA DE NOTAS =====");
                    for (int i = 0; i < notas.size(); i++) {
                        System.out.println((i + 1) + ". " + notas.get(i));
                    }
                }
            }
            else if (opcion.equals("3")) {
                if (notas.size() == 0) {
                    System.out.println("No hay notas para editar.");
                } else {
                    System.out.println("Seleccione la nota a editar:");
                    for (int i = 0; i < notas.size(); i++) {
                        System.out.println((i + 1) + ". " + notas.get(i));
                    }
                    System.out.print("Numero de la nota: ");
                    int posicion = Integer.parseInt(entrada.nextLine());
                    if (posicion >= 1 && posicion <= notas.size()) {
                        System.out.print("Escriba la nueva nota: ");
                        String nuevaNota = entrada.nextLine();
                        notas.set(posicion - 1, nuevaNota);
                        System.out.println("Nota actualizada.");
                    } else {
                        System.out.println("Posicion invalida.");
                    }
                }
            }
            else if (opcion.equals("4")) {
                if (notas.size() == 0) {
                    System.out.println("No hay notas para eliminar.");
                } else {
                    System.out.println("Seleccione la nota a eliminar:");
                    for (int i = 0; i < notas.size(); i++) {
                        System.out.println((i + 1) + ". " + notas.get(i));
                    }
                    System.out.print("Numero de la nota: ");
                    int posicion = Integer.parseInt(entrada.nextLine());
                    if (posicion >= 1 && posicion <= notas.size()) {
                        notas.remove(posicion - 1);
                        System.out.println("Nota eliminada.");
                    } else {
                        System.out.println("Posicion invalida.");
                    }
                }
            }
            else if (opcion.equals("5")) {
                System.out.println("Saliendo del sistema...");
                break;
            }
            else {
                System.out.println("Opcion invalida.");
            }
            System.out.println();
        }
        entrada.close();
    }
}