abstract class Boisson {
   String description;

   abstract double price();

   public void getDescription() {
      System.out.println(description);
   }
}


class Espresso extends Boisson {
   public Espresso() {
      this.description = "Espresso";
   }

   public double price(){
      return 2;
   }
}



class DecorateurIngredient extends Boisson {
   Boisson boisson;
   
   public DecorateurIngredient(Boisson b) {
      this.boisson = b;
      this.description = b.description;
   }

   @Override
   public double price() {
      return boisson.price();
   }
}


class Caramel extends DecorateurIngredient {
   public Caramel(Boisson b){
      super(b);
      this.description = super.description + " Caramel";
   }

   @Override
   public double price() {
      return super.price() + 3;
   }
}


class Chantilly extends DecorateurIngredient {
   public Chantilly(Boisson b){
      super(b);
      this.description = b.description + " Chantilly";
   }

   @Override
   public double price() {
      return super.price() + 1;
   }
}


class Lait extends DecorateurIngredient {
   public Lait(Boisson b){
      super(b);
      this.description = b.description + " Lait";
   }

   @Override
   public double price() {
      return super.price() + 4;
   }
}