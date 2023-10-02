// abstract class Canard {
//    ComportementVol monVol;
//    ComportentCancan monCancan;

//    public void effectuerVol(){
//       monVol.voler();
//    }

//    public void effectuerCancan() {
//       monCancan.cancaner();
//    }

//    abstract void afficher() ;
// }
abstract class Canard {
   // ComportementVol monVol;
   // ComportentCancan monCancan;

   public void effectuerVol(){
      // monVol.voler();
   }

   public void effectuerCancan() {
      // monCancan.cancaner();
   }

   abstract void afficher() ;
}

class Dindon  {
   public Dindon(){
     
   }

   public void glouter() {
      System.out.println("glouter");
   }
}

class DindonWraper extends Canard {
   Dindon dindon;

   public DindonWraper(Dindon dindon){
      this.dindon= dindon;
   }

   public void cancaner() {
      this.dindon.glouter();
   }

   @Override
   void afficher() {
      System.out.println("Je suis un adpater dindon");
   }
}



class Colvert extends Canard {
   public Colvert(){
      monVol = new VolerAvecDesAiles();
      monCancan = new Cancan();
   }

   @Override
   void afficher() {
      System.out.println("Je suis un vrai colvert");
   }
}


class CanardMecanique extends Canard {
   private Integer cptCancan = 0;
  
   public CanardMecanique(){
      monVol = new NePasVoler();
      monCancan = new Cancan();
   }

   @Override
   public void effectuerCancan() {
      super.effectuerCancan();
      this.cptCancan++;
      if (this.cptCancan >=3){
         this.monVol = new PropulsionReaction();
      }
   }

   @Override
   void afficher() {
      System.out.println("Je suis un Canard Mécanique");
   }
}