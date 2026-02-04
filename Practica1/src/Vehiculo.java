public class Vehiculo {
    //Atributos (Estado)
    String modelo;
    double nivelGas;
    double maxGas;

    public Vehiculo(String modelo, double nivelGas, double maxGas) {
        this.modelo = modelo;
        this.nivelGas = nivelGas;
        this.maxGas = maxGas;
    }

    //Metodo (Comportamiento)
    public void tanquear (double litros){

        if ((nivelGas + litros) > maxGas){
            System.out.println("No se puede llenar al mas del 100% de la capacidad maxima");
        } else if (litros <= (maxGas * 0.5)) {
            nivelGas = nivelGas + litros;
            System.out.println("El tanque ahora tiene: " + nivelGas + " litros");
            if (nivelGas >= (maxGas * 0.9 )){
                System.out.println("Rebasaste el nivel recomdable de nivel de gasolina (90%) ");
            }
        } else {
            System.out.println("No se puede cargar mas del 50% de la capacidad maxima en una sola carga");
        }
    }
}
