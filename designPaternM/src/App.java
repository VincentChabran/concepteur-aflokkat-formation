public class App {
    public static void main(String[] args) throws Exception {
        // Canard colvert = new Colvert();
        // colvert.effectuerCancan();
        // colvert.effectuerVol();

        // Canard mecanique = new CanardMecanique();
        // mecanique.effectuerVol();
        // mecanique.effectuerCancan();
        // mecanique.effectuerCancan();
        // mecanique.effectuerCancan();
        // // mecanique.monVol = new PropulsionReaction();
        // mecanique.effectuerVol();


        Boisson finalB = new Caramel(new Chantilly(new Espresso()));

        finalB.getDescription();
        System.out.println(finalB.price());

        
    }
}



