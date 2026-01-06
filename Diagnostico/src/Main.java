import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int numero;
        boolean bandera = true;
        int sume = 0;

        List<Integer> numeros = new ArrayList<>();

        do {

            System.out.println("Ingresa un numero (O para detener)");
            numero = scanner.nextInt();

            if (numero != 0){

                numeros.add(numero);


            } else {
                bandera = false;
            }


        } while (bandera);

        for (int i = 0; i < numeros.size(); i++){
            System.out.println(numeros.get(i));

            sume = sume + numeros.get(i);

        }

        System.out.println(sume);

    }
}