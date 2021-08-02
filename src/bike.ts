

export class Bike {  
   
   static OneThousand = 1000;
    static TwoThousand = 2000;
    static ThreeThousand = 3000;
    static FourThousand = 4000;
    static FiveThousand = 5000;    
    
    constructor(brand: string, model: string, price: number) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }

    public brand: string;
    public model: string;    
    public price: number;
}