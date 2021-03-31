
import 'mocha';
import { Order } from './order';
import { Line } from './line';
import { Bike } from './bike';
import { expect } from 'chai';

const defy = new Bike("Giant", "Defy 1", Bike.OneThousand);
const elite = new Bike("Specialized", "Venge Elite", Bike.TwoThousand);
const duraAce = new Bike("Specialized", "S-Works Venge Dura-Ace", Bike.FiveThousand);

const resultStatementOneDefy = `Order Receipt for Anywhere Bike Shop
\t1 x Giant Defy 1 = $1,000.00
Sub-Total: $1,000.00
Tax: $72.50
Total: $1,072.50`;

describe('Receipt 1 Defy', () => {
    it('should print a receipt with 1 Defy 1', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(defy, 1));
        expect(order.receipt()).to.equal(resultStatementOneDefy);
    });
});


const resultStatementOneElite = `Order Receipt for Anywhere Bike Shop
\t1 x Specialized Venge Elite = $2,000.00
Sub-Total: $2,000.00
Tax: $145.00
Total: $2,145.00`;

describe('Receipt 1 Elite', () => {
    it('should print a receipt with 1 Venge Elite', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(elite, 1));
        expect(order.receipt()).to.equal(resultStatementOneElite);
    });
});

const resultStatementOneDuraAce = `Order Receipt for Anywhere Bike Shop
\t1 x Specialized S-Works Venge Dura-Ace = $5,000.00
Sub-Total: $5,000.00
Tax: $362.50
Total: $5,362.50`;

describe('Receipt 1 Dura-Ace', () => {
    it('should print a receipt with 1 Dura-Ace', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(duraAce, 1));
        expect(order.receipt()).to.equal(resultStatementOneDuraAce);
    });
});

const resultStatementAllBikes = `Order Receipt for Anywhere Bike Shop
\t1 x Giant Defy 1 = $1,000.00
\t1 x Specialized Venge Elite = $2,000.00
\t1 x Specialized S-Works Venge Dura-Ace = $5,000.00
Sub-Total: $8,000.00
Tax: $580.00
Total: $8,580.00`;

describe('Receipt 3 Bikes', () => {
    it('should print a receipt with 3 different bikes', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(defy, 1));
        order.addLine(new Line(elite, 1));
        order.addLine(new Line(duraAce, 1));
        expect(order.receipt()).to.equal(resultStatementAllBikes);
    });
});


const htmlResultStatementOneDefy = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Giant Defy 1 = $1,000.00</li></ul><h3>Sub-Total: $1,000.00</h3><h3>Tax: $72.50</h3><h2>Total: $1,072.50</h2></body></html>';

describe('Html Receipt 1 Defy', () => {
    it('should print an html receipt with 1 Defy 1', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(defy, 1));
        expect(order.htmlReceipt()).to.equal(htmlResultStatementOneDefy);
    });
});


const htmlResultStatementOneElite = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Specialized Venge Elite = $2,000.00</li></ul><h3>Sub-Total: $2,000.00</h3><h3>Tax: $145.00</h3><h2>Total: $2,145.00</h2></body></html>';

describe('Html Receipt 1 Elite', () => {
    it('should print an html receipt with 1 Venge Elite', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(elite, 1));
        expect(order.htmlReceipt()).to.equal(htmlResultStatementOneElite);
    });
});

const htmlResultStatementOneDuraAce = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Specialized S-Works Venge Dura-Ace = $5,000.00</li></ul><h3>Sub-Total: $5,000.00</h3><h3>Tax: $362.50</h3><h2>Total: $5,362.50</h2></body></html>';

describe('Html Receipt 1 Dura-Ace', () => {
    it('should print an html receipt with 1 Dura-Ace', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(duraAce, 1));
        expect(order.htmlReceipt()).to.equal(htmlResultStatementOneDuraAce);
    });
});

const htmlResultStatementAllBikes = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Giant Defy 1 = $1,000.00</li><li>1 x Specialized Venge Elite = $2,000.00</li><li>1 x Specialized S-Works Venge Dura-Ace = $5,000.00</li></ul><h3>Sub-Total: $8,000.00</h3><h3>Tax: $580.00</h3><h2>Total: $8,580.00</h2></body></html>';

describe('Html Receipt 3 Bikes', () => {
    it('should print an html receipt with 3 different bikes', () => {
        var order = new Order("Anywhere Bike Shop");
        order.addLine(new Line(defy, 1));
        order.addLine(new Line(elite, 1));
        order.addLine(new Line(duraAce, 1));
        expect(order.htmlReceipt()).to.equal(htmlResultStatementAllBikes);
    });
});