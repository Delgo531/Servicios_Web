import java.util.Scanner;

public class CentroVehicular {

    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);

        String engomado = "Rechazado";
        int nivelEmision= -1;
        int hayAuto = 1;

        while (hayAuto == 1){

            while (nivelEmision < 0 ) {
                System.out.println("Ingresa el nivel de emision");
                nivelEmision = scan.nextInt();

                if (nivelEmision<0 {
                    System.out.println("Ingresa un valor valido");
                }

            }


            if (nivelEmision < 11){
                engomado = "00";
            } else if (nivelEmision < 26){
                engomado = "0";
            } else if (nivelEmision < 51){
                engomado = "1";
            } else if (nivelEmision < 76) {
                engomado = "2";
            } else {
                engomado = "RECHAZADO";
            }

            System.out.println("Nivel de engomado: " + engomado);

            System.out.println("Hay otro auto 1.si 2.no");

            hayAuto = scan.nextInt();


        }
    }
}
