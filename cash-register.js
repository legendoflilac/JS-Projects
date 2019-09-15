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
      //find total in drawer
      for (var totalIndex = 0; totalIndex<cid.length;totalIndex++) {
          totalInDrawer = totalInDrawer + cid[totalIndex][1]
      }
      totalInDrawer = totalInDrawer.toFixed(2) * 1 //toFixed returns string, multiply by 1 to convert back to Number
      console.log('Total in Drawer is: ', totalInDrawer)
      if (totalInDrawer == change) { //if we have the same amount in the drawer as need for change, then the program finishes
          return {status: "CLOSED", change: cid} 
      }
      else if (totalInDrawer < change) { //if we can't make change due to not having enough money, the program finishes
          return {status: "INSUFFICIENT_FUNDS", change: []}
      }
      else { //otherwise, find the money we need to make change
        var moneyValue = 8; //this index works back-to-front on the values array
        while (change > 0) {
            if (moneyValue < 0) {
                return {status: "INSUFFICIENT_FUNDS", change: []}; //if we reach here, we've exhausted all other options on previous loops
            }
            else if (change - values[moneyValue][1] < 0) { //if change minus the denomination is less than 0, find a new denomination
                moneyValue = moneyValue - 1;
            }
            else if (change - values[moneyValue][1] >= 0) {
                if (cid[moneyValue][1] > 0) { //if we have the denomination in the drawer
                    change = (change - values[moneyValue][1]).toFixed(2) * 1 //do the math plus converting back to Number
                    changeArray.push(values[moneyValue]) //push this value to the new Array
                    console.log('Pushing: ', values[moneyValue])
                    if (changeArray.length >= 2) { //if we push two twenties, we need to have the result say ["TWENTY", 40]. Below is my solution for that
                        for (var i=changeArray.length-1; i>0; i--) {
                            if (changeArray[i][0]==changeArray[i-1][0]) { //if "TWENTY" == "TWENTY")
                                changeArray[i-1] = [changeArray[i-1][0], changeArray[i-1][1]+changeArray[i][1]] //then change the first "TWENTY" array to be ["TWENTY", 40]
                                changeArray.pop(i) //take off the last/most recent item added--it's already been counted
                            }
                        }
                      }
                      cid[moneyValue][1] = cid[moneyValue][1]-values[moneyValue][1] //subtract the money from the drawer
                }
                else {
                    moneyValue = moneyValue - 1; //otherwise move a denomination
                }
            }

        }
        }
        return {status: 'OPEN', change: changeArray}; //we can give change and have money in the drawer--return the change array
      }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

  /*
In Review
This was a tough one. I procrastinated a lot, and getting it to pass all the tests was a relief.
I looked at a few other questions and answers to this project but didn't find them to be helpful.
I intentionally wanted to work with the data in arrays only instead of converting to arrays of 
objects as shown below in the the guide. I felt it would give an extra challenge (spoiler: it was).
The rest of the code in the guide seems more elegant and uses reduce functions, which I'm still
bad at implementing into anything beyond toy examples. At least it's something to work toward.

https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/
*/