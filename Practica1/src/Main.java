public class Main {
    public static void main(String[] args) {

        /*
        Vehiculo volkswagen = new Vehiculo("Jetta", 0.0, 100.0);

        volkswagen.tanquear(90);
        volkswagen.tanquear(50);
        volkswagen.tanquear(50);

         */


        //variables de referencia
        //heap -> valores (Televisor)
        //stack -> referencias (Control remoto)
        //Vehiculo volkswagen = new Vehiculo
        //  (var referencia)    (Var valor)
        //      (stack)           (heap)
        //Siempre hay que inicializar un objeto, son señales, por ejemplo llamar metodos
        //Cuando hay referencias multiples (mas de una variable apuntado a lo mismo) cuando accedas a una para cambiar, se cambian las dos
        //el garbage collector se lleva los datos que quedaron volando

        Vehiculo controlA = new Vehiculo("Tesla", 10 ,10);
        Vehiculo controlB = controlA;

        controlB.modelo = "spark";

        System.out.println(controlA.modelo);

    }
}