public abstract class ComportementVol {
   abstract public void voler();
}


class VolerAvecDesAiles extends ComportementVol {
   public void voler(){
       System.out.println("Je voles !!");
   }
}


class NePasVoler extends ComportementVol {
   public void voler(){
       System.out.println("Je ne sais pas voler.");
   }
} 


class PropulsionReaction extends ComportementVol {
    @Override
    public void voler() {
       System.out.println("Propulson à reaction");
    }
}
