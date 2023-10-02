abstract class ComportentCancan {
   abstract public void cancaner();
}

class Cancan extends ComportentCancan {
   public void cancaner() {
      System.out.println("Cancan");
   }
}

class CancanMuet extends ComportentCancan {
   @Override
   public void cancaner() {
      System.out.println("...");
   }
}

class CoinCoin extends ComportentCancan {
   @Override
   public void cancaner() {
      System.out.println("CoinCoin");
   }
}