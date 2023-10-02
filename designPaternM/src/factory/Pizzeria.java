package factory;


abstract class Pizzeria {
   public abstract Pizza creerPizza(String nom);
   
   public abstract void commanderPizza(String nom);
}


// class PizzeriaAjaccienne extends Pizzeria {
// }

class PizzeriaBastiaise extends Pizzeria {
   @Override
   public void commanderPizza(String nom) {
      // TODO Auto-generated method stub
      
   }

   @Override
   public Pizza creerPizza(String nom) {
      // TODO Auto-generated method stub
      
   }
}




abstract class Pizza {
   String[] ingredients;

   public String __toString(){
      return "Je suis une pizza " ;
   }

   public void preparer() {
      System.out.println("preparer");
   }
}

class PizzaMozza extends Pizza {
   public PizzaMozza(){
      // this.ingredients.add("mozza");
   }
}