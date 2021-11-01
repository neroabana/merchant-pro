import {Line} from "./line";
import { Bike } from "./bike";

const newline = '\n';

function formatMoney(amount: any, decimalCount = 2, decimal = ".", thousands = ",") {  
    try {      
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        const negativeSign = amount < 0 ? "-" : "";
        let i: any = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");    
    } catch (e) {
      console.log(e);
    }
}

export class Order {  
    private _taxRate: number = .0725;
    private _lines: Line[] = []; 
    private _company: string;
        
    constructor(company: string) {
        this._company = company;
    }
    
    private _discount(coupon: string): number {
        switch (coupon){
          case "HARLEY": return .9;
          case "DUCATI": return .8;
          case "SUZUKI": return .7;
          case "HONDA": return .6;
          case "KAWAZAKI": return .8;          
          default: return 1;
        }
    } 

    public get company(): string {
        return this._company;
    }

    public addLine(line: Line): void {        
        this._lines.push(line);
    }    

    public receipt(): string {
        var totalAmount = 0;
        var result = 'Order Receipt for ' + this._company + newline;

        for (var i = 0; i < this._lines.length; i++) {
            var thisAmount = 0;

            switch (this._lines[i].bike.price) {
                case Bike.OneThousand:
                    if (this._lines[i].quantity >= 20)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                case Bike.TwoThousand:
                    if (this._lines[i].quantity >= 10)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                case Bike.ThreeThousand:
                    if (this._lines[i].quantity >= 8)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                case Bike.FourThousand:
                    if (this._lines[i].quantity >= 6)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                case Bike.FiveThousand:
                    if (this._lines[i].quantity >= 5)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                default: thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
            }
            result += '\t' + this._lines[i].quantity + ' x ' + this._lines[i].bike.brand + ' ' + this._lines[i].bike.model + ' = $' + formatMoney(thisAmount) + newline;
            totalAmount += thisAmount;
        }

        result += 'Sub-Total: $' + formatMoney(totalAmount) + newline;
        var tax = totalAmount * this._taxRate;
        result += 'Tax: $' + formatMoney(tax) + newline;
        result += 'Total: $' + formatMoney(totalAmount + tax);

        return result;
    }

    public htmlReceipt(): string {
        var totalAmount = 0;
        var result = '<html><body><h1>Order Receipt for ' + this._company + '</h1>';

        result += '<ul>';
        for (var i = 0; i < this._lines.length; i++) {
            var thisAmount = 0;

            switch (this._lines[i].bike.price) {
                case Bike.OneThousand:
                    if (this._lines[i].quantity >= 20)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                case Bike.TwoThousand:
                    if (this._lines[i].quantity >= 10)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                 case Bike.ThreeThousand:
                    if (this._lines[i].quantity >= 8)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                case Bike.FourThousand:
                    if (this._lines[i].quantity >= 6)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                case Bike.FiveThousand:
                    if (this._lines[i].quantity >= 5)
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price * this._discount(this._lines[i].coupon);
                    else
                        thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
                    break;
                default:  thisAmount += this._lines[i].quantity * this._lines[i].bike.price;
            }
            result += '<li>' + this._lines[i].quantity + ' x ' + this._lines[i].bike.brand + ' ' + this._lines[i].bike.model + ' = $' + formatMoney(thisAmount) + '</li>';
            totalAmount += thisAmount;
        };
        result += '</ul>';

        result += '<h3>Sub-Total: $' + formatMoney(totalAmount) + '</h3>';
        var tax = totalAmount * this._taxRate;
        result += '<h3>Tax: $' + formatMoney(tax) + '</h3>';
        result += '<h2>Total: $' + formatMoney(totalAmount + tax) + '</h2>';
        result += '</body></html>';
        return result;
    }
}