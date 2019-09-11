/*
Cash register
-Should always return an object with a status key and a change key
-return {status: "INSUFFICIENT FUNDS", change: []} if cid < change due, or if you cannot return exact change.
-return {status: "CLOSED", change: [...]} with cid as value for key change if it is equal to change due
-otherwise, return {status: "OPEN", change: [...]} with change due in coins and bills, sorted high to low, as value of change key.
*/

function checkCashRegister(price, cash, cid) {
    var change;
    var result;
    var values = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]]
    // these may need to be the same way as the prompt
    change = cash - price
    for (var item = 0; item<values.length; item++) {
        for (var subitem = 0; subitem<values[item].length; subitem++) {
            //does it matter if it's length? or can we just access the number
            if (change < values[item][1]) {
                continue
            }
            else if (change < values[item][1] && change > values[item+1][1]) {
                if (change = change / values[item+1][1] == 0)  {
                    if (cid[item+1][1] > change) {
                        result = values[item+1][0]
                    }
                } 
            }
        }
    }
    return change;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);