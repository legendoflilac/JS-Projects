/*
Cash register
-Should always return an object with a status key and a change key
-return {status: "INSUFFICIENT FUNDS", change: []} if cid < change due, or if you cannot return exact change.
-return {status: "CLOSED", change: [...]} with cid as value for key change if it is equal to change due
-otherwise, return {status: "OPEN", change: [...]} with change due in coins and bills, sorted high to low, as value of change key.
[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
*/



  function checkCashRegister(price, cash, cid) {
      var change = cash - price //change due to customer
      console.log('Change Due is: ', change)
      var totalInDrawer = 0;
      var values = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
      var changeArray = [];

      for (var totalIndex = 0; totalIndex<cid.length;totalIndex++) {
          totalInDrawer = totalInDrawer + cid[totalIndex][1]
      }
      totalInDrawer = totalInDrawer.toFixed(2) * 1
      console.log('Total in Drawer is: ', totalInDrawer)
      if (totalInDrawer == change) {
          return {status: "CLOSED", change: cid} 
      }
      else if (totalInDrawer < change) {
          return {status: "INSUFFICIENT_FUNDS", change: []}
      }
      else {
        var moneyValue = 8;
        while (change > 0) {
            if (moneyValue < 0) {
                return {status: "INSUFFICIENT_FUNDS", change: []};
            }
            else if (change - values[moneyValue][1] < 0) {
                moneyValue = moneyValue - 1;
            }
            else if (change - values[moneyValue][1] >= 0) { 
                if (cid[moneyValue][1] > 0) {
                    change = (change - values[moneyValue][1]).toFixed(2) * 1
                    changeArray.push(values[moneyValue])
                    console.log('Pushing: ', values[moneyValue])
                    if (changeArray.length >= 2) {
                        for (var i=changeArray.length-1; i>0; i--) {
                            if (changeArray[i][0]==changeArray[i-1][0]) {
                                changeArray[i-1] = [changeArray[i-1][0], changeArray[i-1][1]+changeArray[i][1]]
                                changeArray.pop(i)
                            }
                        }
                      }
                      cid[moneyValue][1] = cid[moneyValue][1]-values[moneyValue][1]
                }
                else {
                    moneyValue = moneyValue - 1;
                }
            }

        }
        }
        return {status: 'OPEN', change: changeArray};
      }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);